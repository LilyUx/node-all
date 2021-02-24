const Koa = require("koa");
const app = new Koa();
// redis 存储
const redisStore = require("koa-redis");
const redis = require("redis");
const redisClient = redis.createClient(6379, "localhost");

const wrapper = require("co-redis");
// redis实例
const client = wrapper(redisClient);

const session = require("koa-session");

app.keys = ["some secret"];

const SESS_CONFIG = {
  key: "kkk:sess",
  maxAge: 86400000,
  signed: true,
  store: redisStore({ client }),
};

app.use(session(SESS_CONFIG, app));

app.use(async ctx => {
  const keys = await client.keys("*");
  key.forEach(async key => {
    console.log(await client.get(key));
  });
  await next();
});

app.use(ctx => {
  if (ctx.path === "/favicon.ico") return;

  let n = ctx.session.count || 0;

  ctx.session.count = ++n;
  ctx.body = `第${n}次访问`;
});

app.listen(3000);

/**
 * ! Hash 算法 - 摘要算法
 * SHA MD5 HMAC
 */
