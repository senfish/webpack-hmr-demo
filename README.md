### webpack 热更新

- webpack第一次启动的时候，修改了webpack配置的entry参数，向入口文件里面注入了两个文件代码，一个是客户端代码，一个是热更新的代码。

- 当第一次编译结束的时候，服务端用websocket向客户端发送’hash’、‘ok’事件，同时把此次的hash发送给浏览器（客户端）；同时服务端会一直监听文件变动，一旦文件变动，重新编译，并且继续向客户端发送’hash’、‘ok’事件。

- 当文件发生改动之后，客户端就用上一次的hash值，去向服务端请求对应的[moduleId].[hash].hot-update.json和[moduleId].[hash].hot-update.js文件（其中js文件是通过script标签请求的，也就是jsonp的方式，至于为什么要用jsonp是因为要执行js文件里面的内容）

- 执行js文件之后，会调用一个全局的热更新方法(webpackHotUpdate)，然后会去更新对应的模块（apply方法，内部会调用accept）。

> [moduleId].[hash].hot-update.js 文件内容就是调用全局的webpackHotUpdate方法，参数是模块id跟即将要更新的模块内容


### 如何实现组件级别的热更新

要保证组件前后的引用一致（即type），不然的话，引用不一致，react认为是两个不同的组件。



