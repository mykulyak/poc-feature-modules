import type { Context } from '@pocfm/core/build';

export default function registerModule(context: Context) {
  context.eventBus.addListener('login', () => {
    console.log('logged in');
  });
}