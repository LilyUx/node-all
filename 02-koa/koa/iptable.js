/*
 * @Author: your name
 * @Date: 2021-01-26 19:18:39
 * @LastEditTime: 2021-01-26 19:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\02-koa\koa\iptable.js
 */
module.exports = async function (ctx, next) {
  const { res, req } = ctx;
  const blackList = ["127.0.0.1"];
  const ip = getClientIP(req);
  if (blackList.includes(ip)) {
    //出现在黑名单中将被拒绝
    ctx.body = "not allowed";
  } else {
    await next();
  }
};

function getClientIP(req) {
  return (
    req.headers["x-forwarded-for"] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress
  );
}
