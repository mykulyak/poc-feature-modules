export default function registerModule(context) {
  context.registerMenu('Feature 1', '/feature1');
  context.registerRoute('/feature1', () => import('./View'));
  context.eventBus.addListener('logout', () => {
    alert('Logged out');
  });
}
