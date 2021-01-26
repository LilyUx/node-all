/*
 * @Author: your name
 * @Date: 2021-01-26 17:44:23
 * @LastEditTime: 2021-01-26 18:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\compose.js
 */
const add = (x, y) => x + y;
const square = z => z * z;

// const compose = (fn1, fn2) => (...args) => fn2(fn1(...args));

// todo
// * compose 实现函数
const compose1 = (...[first, ...other]) => (...args) => {
  let ret = first(...args);
  other.forEach(fn => {
    ret = fn(ret);
  });
  return ret;
};

const fn = compose1(add, square);

console.log(fn(1, 2));

// =======================

function compose(middlewares) {
  return function () {
    dispatch(0);
    function dispatch(i) {
      let fn = middlewares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
}

async function fn1(next) {
  console.log("fn1");
  await next();
  console.log("end fn1");
}

async function fn2(next) {
  console.log("fn2");
  await delay();
  await next();
  console.log("end fn2");
}

function fn3(next) {
  console.log("fn3");
}

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}
const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();
