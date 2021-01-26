/*
 * @Author: your name
 * @Date: 2021-01-26 16:48:54
 * @LastEditTime: 2021-01-26 17:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\02-koa\koa\context.js
 */
module.exports = {
  get url() {
    return this.request.url;
  },
  get body() {
    return this.response.body;
  },
  set body(val) {
    this.response.body = val;
  },
  get method() {
    return this.request.method;
  },
};
