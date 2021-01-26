// test("callback", done => {
//   const { callback } = require("..");
//   callback();
//   // 延迟1s结束
//   setTimeout(done, 1000);
// });

// test("promise", done => {
//   const { promise } = require("..");
//   promise();
//   // 延迟1s结束
//   setTimeout(done, 1000);
// });

// test("generator", done => {
//   const { generator } = require("..");
//   generator();
//   // 延迟1s结束
//   setTimeout(done, 1000);
// });

// test("AsyncAwait", done => {
//   const { asyncAwait } = require("..");
//   asyncAwait();
//   // 延迟1s结束
//   setTimeout(done, 1000);
// });

test("event", done => {
  const { event } = require("..");
  event();
  // 延迟1s结束
  setTimeout(done, 1000);
});
