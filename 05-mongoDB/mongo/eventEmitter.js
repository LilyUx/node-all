const { EventEmitter } = require("events");

const event = new EventEmitter();

event.on("connect", num => {
  // insert
  console.log("insert 123", num);
});

let num = 0;
// 连接过程
setInterval(() => {
  // 触发通知
  event.emit("connect", num++);
}, 1000);
