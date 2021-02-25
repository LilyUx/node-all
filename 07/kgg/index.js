// const app = new (require("koa"))();

// const { initRouter } = require("./loader");
// app.use(initRouter().routes());

// app.listen(3000);

const hhh = require("./hhh");

const app = new hhh();

app.start(3000);
