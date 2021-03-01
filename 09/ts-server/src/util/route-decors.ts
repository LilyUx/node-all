import * as Koa from "koa";
import * as KoaRouter from "koa-router";
import * as glob from "glob";

const router = new KoaRouter();

export const createMethod = (router: KoaRouter) => (
  method: "get" | "post" | "put" | "del" | "patch"
) => (
  path: string,
  options?: {
    middlewares: Array<any>;
  }
) => {
  return (target, property) => {
    process.nextTick(() => {
      const middlewares = [];

      if (target.middlewares) {
        middlewares.push(...target.middlewares);
      }

      if (options && options.middlewares) {
        middlewares.push(...options.middlewares);
      }

      // 添加路由
      middlewares.push(target[property]);

      router[method](path, ...middlewares);
    });
  };
};

// 保证作用域
const method = createMethod(router);

export const get = method("get");
export const post = method("post");
export const put = method("put");
export const del = method("del");
export const patch = method("patch");

export const middleware = function (middlewares) {
  return function (target) {
    target.prototype.middlewares = middlewares;
  };
};

export const load = (folder: string): KoaRouter => {
  const extname = ".{js,ts}";

  glob
    .sync(require("path").join(folder, `./**/*${extname}`))
    .forEach(item => require(item));

  return router;
};
