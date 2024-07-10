const app = { current: null };

function InnerComp(...arg) {
  if (app.current) {
    return app.current(...arg);
  }
}

export function proxyComponent(comp) {
  app.current = comp;

  return InnerComp;
}
