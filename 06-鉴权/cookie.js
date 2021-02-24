const http = require("http");

const session = {};

http
  .createServer((req, res) => {
    console.log("cookie", req.headers.cookie);

    const sessionKey = "sid";
    const cookie = req.headers.cookie;

    if (cookie && cookie.indexOf(sessionKey) > -1) {
      // 已登录
      res.end("Come Back");

      const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`);
      const sid = pattern.exec(cookie)[1];
      console.log("session:", sid, session, session[sid]);
    } else {
      // 新用户
      const sid = (Math.random() * 9999999).toFixed();
      res.setHeader("Set-Cookie", `${sessionKey}=${sid}`);
      session[sid] = {
        name: "laowang",
      };
      res.end("Hello cookie");
    }

    // res.setHeader("Set-Cookie", "key=123");
    // res.end("Hello cookie");
  })
  .listen(3000);
