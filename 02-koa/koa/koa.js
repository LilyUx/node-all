/*
 * @Author: xuling
 * @Date: 2021-01-26 16:32:04
 * @LastEditTime: 2021-01-26 18:20:08
 * @LastEditors: Please set LastEditors
 * @Description: Koa 手写源码
 * @FilePath: \node\02-koa\koa\koa.js
 */

const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");

class Koa {
  constructor() {
    this.middlewares = [];
  }
  // use(callback) {
  //   this.callback = callback;
  // }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      // this.callback(req, res);

      // * 1. 创建上下文
      const ctx = this.createContext(req, res);
      // this.callback(ctx);

      // * 合成
      const fn = this.compose(this.middlewares);

      await fn(ctx);

      // * 2. 响应
      res.end(ctx.body);
    });
    server.listen(...args);
  }
  // * 创建上下文
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);

    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
  // * 合成函数 - 处理中间件
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0);
      function dispatch(i) {
        let fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(ctx, function next() {
            return dispatch(i + 1);
          })
        );
      }
    };
  }
}

module.exports = Koa;
