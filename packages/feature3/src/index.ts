import type { Context } from '@pocfm/core/build';

export default function registerModule(context: Context) {
  context.registerMenu('Feature 3', '/feature3');
  context.registerRoute('/feature3', () => import('./View'));
}
