import type { Context } from '@pocfm/core/build';

export default function registerModule(context: Context) {
  context.registerMenu('Feature 2', '/feature2');
  context.registerRoute('/feature2', () => import('./View'));
}
