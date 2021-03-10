export default function registerModule(context) {
  context.registerMenu('Feature 3', '/feature3');
  context.registerRoute('/feature3', () => import('./View'));
}
