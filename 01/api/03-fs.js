// const fs = require("fs");
// const { promisify } = require("util");

// 同步
// const data = fs.readFileSync("./config.js");
// console.log(data.toString());

// 异步 readFile 错误优先
// fs.readFile("./config.js", (err, data) => {
//   if (err) throw err;
//   console.log("data", data.toString());
// });

// promisify
// const readFile = promisify(fs.readFile);

// console.log("read ...");

(async () => {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./config.js");
  console.log("data", data.toString());
  console.log("read ...");
})();
