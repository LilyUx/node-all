const { Controller } = require("egg");

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @summary 创建用户
   * @description 创建用户 记录用户信息
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
    // eslint-disable-next-line no-undef
    // aa();
    // ctx.body = {
    //   code: 200,
    //   data: {},
    // };

    // 校验参数
    ctx.validate(ctx.rule.createUserRequest);

    // const res = {
    //   abc: 123,
    // };

    // 组装参数
    const payload = ctx.request.body || {};

    // 调用
    const res = await this.service.user.create(payload);

    // 统一应答
    ctx.helper.success({
      ctx,
      res,
    });
  }
}

module.exports = UserController;
