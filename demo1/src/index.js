import print from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = `<p>webpack hmr demo</p>`;

  btn.innerHTML = 'Click me!';
  btn.onclick = print;
  const input = document.createElement('input');
  element.appendChild(btn);
  element.appendChild(input);

  return element;
}

let element = component();
document.body.appendChild(element);

/**
 * 实现 HMR 接口，当 print.js 及其子模块 message.js 变更时，触发注册的 accept 回调
 */
if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('accept print.js !!!!');

    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
