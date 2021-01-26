/*
 * @Author: xuling
 * @Date: 2021-01-26 16:26:41
 * @LastEditTime: 2021-01-26 19:20:36
 * @LastEditors: Please set LastEditors
 * @Description: http 服务
 * @FilePath: \node\02-koa\koa\index.js
 */
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end("hello");
// });

// server.listen(3000, () => {
//   console.log("监听端口 3000");
// });

const Koa = require("./koa");
const app = new Koa();

// app.use((req, res) => {
//   res.writeHead(200);
//   res.end("hello");
// });

// app.use(ctx => {
//   ctx.body = "hahahahahah";
// });

// const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2000));

// app.use(async (ctx, next) => {
//   ctx.body = "1";
//   await next();
//   ctx.body += "5";
// });

// app.use(async (ctx, next) => {
//   ctx.body += "2";
//   await delay();
//   await next();
//   ctx.body += "4";
// });

// app.use(async (ctx, next) => {
//   ctx.body += "3";
// });

const Router = require("./router");
const router = new Router();

router.get("/index", async ctx => {
  ctx.body = "index page";
});

router.get("/post", async ctx => {
  ctx.body = "post page";
});

router.get("/list", async ctx => {
  ctx.body = "list page";
});

router.get("/put", async ctx => {
  ctx.body = "put page";
});

app.use(router.routes());

const static = require("./static");
app.use(static(__dirname + "/public"));

app.use(require("./iptable"));

app.listen(3000, "0.0.0.0", () => {
  console.log("监听端口 3000");
});
