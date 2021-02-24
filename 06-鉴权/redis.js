const redis = require("redis");

const client = redis.createClient(6379, "localhost");

// 同步
client.set("hello", "This is a value");

// 异步
client.get("hello", (err, v) => {
  console.log("redis get ", v);
});
