/*
 * @Author: xuling
 * @Date: 2021-01-25 19:28:41
 * @LastEditTime: 2021-01-26 16:25:28
 * @LastEditors: Please set LastEditors
 * @Description: Koa 使用方式
 * @FilePath: \node\02-koa\index.js
 */
const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  console.log(`请求 ${ctx.url} 耗时${end - start}`);
});

app.use((ctx, next) => {
  const expire = Date.now() + 100;
  // * 同步锁
  while (Date.now() < expire)
    ctx.body = {
      tom: "hello world11",
    };
  next();
});

app.listen(3000);
