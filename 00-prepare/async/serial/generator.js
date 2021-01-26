function* func() {
  console.log("one");
  yield "1";
  console.log("two");
  yield "2";
  console.log("three");
  yield "3";
}

const f = func();
// console.log("next", f.next());
// // one
// // next { value: '1', done: false }
// console.log("next", f.next());
// // two
// // next { value: '2', done: false }
// console.log("next", f.next());
// // three
// // next { value: '3', done: false }
// console.log("next", f.next());
// // next { value: undefined, done: true }

// * 迭代器
for (const [key, value] of func()) {
  console.log(`${key} : ${value}`);
}
// one
// 1 : undefined
// two
// 2 : undefined
// three
// 3 : undefined
