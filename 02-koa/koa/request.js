/*
 * @Author: your name
 * @Date: 2021-01-26 16:48:45
 * @LastEditTime: 2021-01-26 17:06:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\02-koa\koa\request.js
 */
module.exports = {
  get url() {
    return this.req.url;
  },
  get method() {
    return this.req.method.toLowerCase();
  },
};
