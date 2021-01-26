const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("request...", getPrototypeChain(request));
  // response.end("haha");
  const { url, method, headers } = request;
  if (url === "/" && method === "GET") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        response.writeHead(500, {
          "Content-type": "text/plain;charset=utf-8",
        });
        response.end("500, 服务器挂了");
      }
      response.statusCode = 200;
      response.setHeader("Content-type", "text/html");
      response.end(data);
    });
  } else if (url === "/user" && method === "GET") {
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    response.end(
      JSON.stringify({
        name: "tom",
      })
    );
  } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
    // 覆盖所有的image请求
    fs.createReadStream("." + url).pipe(response);
  }
});

server.listen(3000);

function getPrototypeChain(obj) {
  const prototypeChain = [];
  // console.log(Object.getPrototypeOf(obj));
  while ((obj = Object.getPrototypeOf(obj))) {
    prototypeChain.push(obj);
  }
  return prototypeChain;
}
