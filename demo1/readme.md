# Getting Started

## 操作步骤

1. 在 `index.js` 中实现了 HMR 接口，当模块变更时，触发 `accept` 回调
2. 修改 `message.js` 中的 `message` 变量，并保存
3. 点击页面中的按钮
4. 页面无需重载，`alert` 的值是最新的
5. 打开控制台，将 `print.js` 中的注释打开，再次修改 `message` 变量
6. 在控制中看到打印了 `Accepting the updated print module!`，没有打印 `accept print.js !!!!`

综上我们知道如何定义 HMR 接口，以及模块更新的冒泡，直到最近一个注册了 HMR 接口的模块，并调用 `accept` 回调。
