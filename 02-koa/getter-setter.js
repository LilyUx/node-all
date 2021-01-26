/*
 * @Author: your name
 * @Date: 2021-01-26 17:42:02
 * @LastEditTime: 2021-01-26 17:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\02-koa\getter-setter.js
 */
// 测试代码，test-getter-setter.js
const koa = {
  info: { name: "koa", desc: "koa is good" },
  get name() {
    return this.info.name;
  },
  set name(val) {
    console.log("new name is" + val);
    this.info.name = val;
  },
};
console.log(koa.name);
koa.name = "kaikeba";
console.log(koa.name);
