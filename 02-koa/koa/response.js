/*
 * @Author: your name
 * @Date: 2021-01-26 16:48:37
 * @LastEditTime: 2021-01-26 16:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\02-koa\koa\response.js
 */
module.exports = {
  get body() {
    return this._body;
  },
  set body(val) {
    this._body = val;
  },
};
