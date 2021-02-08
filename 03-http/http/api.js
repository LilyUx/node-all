const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const { method, url, headers } = req;
    console.log(headers.cookie);
    if (method === "GET" && url === "/") {
      fs.readFile("./index.html", (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      });
    } else if (method === "GET" && url === "/api/users") {
      res.setHeader("Content-Type", "application/json");
      // ! Access-Control-Allow-Origin 设置可跨域的地址
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Set-Cookie", "cookie=eeee");
      res.end(
        JSON.stringify({
          name: "tom",
        })
      );
    } else if (method === "OPTIONS" && url === "/api/users") {
      // ! 预检请求
      res.setHeader("Set-Cookie", "cookie=eeee");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "X-Token, Content-Type",
        "Access-Control-Allow-Methods": "PUT",
      });
      res.end();
    } else if (method === "POST" && url === "/api/save") {
      let reqData = [];
      req.on("data", data => {
        reqData.push(data);
      });
      req.on("end", () => {
        const data = Buffer.concat(reqData);
        res.end(`formdata : ${data.toString()}`);
      });
    }
  })
  .listen(4000, () => {
    console.log("api listen on 4000");
  });
