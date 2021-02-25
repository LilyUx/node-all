const koa = require("koa");
const {
  initRouter,
  initController,
  initService,
  initConfig,
  initSchedule,
} = require("./loader");

class hhh {
  constructor(conf) {
    this.$app = new koa(conf);
    initConfig(this);

    this.$ctrl = initController(this);

    this.$service = initService(this);

    this.$router = initRouter(this);

    this.$app.use(this.$router.routes());

    initSchedule();
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log("服务器启动成功");
    });
  }
}

module.exports = hhh;
