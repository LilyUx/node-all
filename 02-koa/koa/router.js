/*
 * @Author: your name
 * @Date: 2021-01-26 18:28:33
 * @LastEditTime: 2021-01-26 19:03:36
 * @LastEditors: Please set LastEditors
 * @Description: 策略模式
 * @FilePath: \node\02-koa\koa\router.js
 */
class Router {
  constructor() {
    this.stack = [];
  }

  register(path, methods, middleware) {
    let route = { path, methods, middleware };
    this.stack.push(route);
  }

  get(path, middleware) {
    this.register(path, "get", middleware);
  }

  post(path, middleware) {
    this.register(path, "post", middleware);
  }

  routes() {
    let stock = this.stack;
    return async function (ctx, next) {
      let currentPath = ctx.url;
      let route;

      for (let i = 0; i < stock.length; i++) {
        let item = stock[i];
        if (
          currentPath === item.path &&
          item.methods.indexOf(ctx.method) >= 0
        ) {
          route = item.middleware;
          break;
        }
      }

      if (typeof route === "function") {
        route(ctx, next);
        return;
      }
      await next();
    };
  }
}

module.exports = Router;
