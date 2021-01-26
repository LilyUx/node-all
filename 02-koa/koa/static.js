/*
 * @Author: your name
 * @Date: 2021-01-26 19:02:56
 * @LastEditTime: 2021-01-26 19:18:20
 * @LastEditors: Please set LastEditors
 * @Description:
 *              配置绝对资源目录地址，默认为static
 *              获取文件或者目录信息
 *              静态文件读取
 *              返回
 * @FilePath: \node\02-koa\koa\static.js
 */

const fs = require("fs");
const path = require("path");

module.exports = (dirPath = "./public") => {
  return async (ctx, next) => {
    if (ctx.url.indexOf("/public") === 0) {
      // public开头 读取文件
      const url = path.resolve(__dirname, dirPath);
      const fileBaseName = path.basename(url);
      const filepath = url + ctx.url.replace("/public", "");
      console.log(filepath); // console.log(ctx.url,url, filepath, fileBaseName)
      try {
        stats = fs.statSync(filepath);
        if (stats.isDirectory()) {
          const dir = fs.readdirSync(filepath);
          const ret = ['<div style="padding-left:20px">'];
          dir.forEach(filename => {
            console.log(filename);
            // 简单认为不带小数点的格式，就是文件夹，实际应该用statSync
            if (filename.indexOf(".") > -1) {
              ret.push(`
              <p><a style="color:black" href="${ctx.url}/${filename}">${filename}</a></p>`);
            } else {
              // 文件
              ret.push(
                `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
              );
            }
          });
          ret.push("</div>");
          ctx.body = ret.join("");
        } else {
          console.log("文件");
          const content = fs.readFileSync(filepath);
          ctx.body = content;
        }
      } catch (e) {
        // 报错了 文件不存在
        ctx.body = "404, not found";
      }
    } else {
      // 否则不是静态资源，直接去下一个中间件
      await next();
    }
  };
};
