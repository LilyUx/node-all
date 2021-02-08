const express = require("express");
const app = express();
// const proxy = require("http-proxy-middleware");

app.use(express.static(__dirname + "/"));
// app.use(
//   "/api",
//   proxy({
//     target: "http://localhost:4000",
//     changeOrigin: false,
//   })
// );
app.listen(3000);
