import EventEmitter from 'events';
import { ComponentType } from 'react';

export type LazyComponentLoader = () => Promise<{ default: ComponentType }>;
export type ModuleInfo = object;
export type MenuEntry = { text: string; urlExp: string };
export type RouteEntry = { urlExp: string; component: LazyComponentLoader};

class AppContext {
  eventBus: EventEmitter;
  components: Record<string, LazyComponentLoader>;
  modules: ModuleInfo[];
  menus: MenuEntry[];
  routes: RouteEntry[];

  constructor() {
    this.eventBus = new EventEmitter();
    this.components = {};
    this.modules = [];
    this.menus = [];
    this.routes = [];
  }

  registerComponent(id: string, fn: LazyComponentLoader) {
    if(id in this.components) {
      throw new Error(`Duplicate shared component ${id}`);
    }
    this.components[id] = fn;
  }

  registerMenu(text: string, urlExp: string) {
    this.menus.push({ text, urlExp });
  }

  registerRoute(urlExp: string, component: LazyComponentLoader) {
    this.routes.push({ urlExp, component });
  }
}

const context = new AppContext();

export default context;
export type Context = typeof context;
