export default function registerModule(context) {
  context.registerMenu('Feature 2', '/feature2');
  context.registerRoute('/feature2', () => import('./View'));
}
