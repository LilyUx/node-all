module.exports = {
  async init(ctx, next) {
    const model = ctx.app.$model[ctx.params.list];

    if (model) {
      ctx.list = model;
      await next();
    } else {
      ctx.body = "no this model";
    }
  },
};
