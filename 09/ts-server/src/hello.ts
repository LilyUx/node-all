/**
 * 装饰器工厂
 * @param s
 */
function decoate(s) {
  return function (target, property, descriptor) {
    const old = descriptor.value;
    console.log(old);
    descriptor.value = msg => {
      msg = `${s}${s}${msg}${s}${s}`;

      return old.apply(null, [msg]);
    };

    return descriptor;
  };
}

// /**
//  *
//  * @param target 装饰器
//  * @param property
//  * @param descriptor
//  */
// function decoate(target, property, descriptor) {
//   const old = descriptor.value;
//   console.log(old);
//   descriptor.value = msg => {
//     msg = `{{${msg}}}`;

//     return old.apply(null, [msg]);
//   };

//   return descriptor;
// }

class Log {
  // anotation 注解风格的装饰器
  @decoate("*")
  print(msg) {
    console.log(msg);
  }
}

// const createDec = s => (target, property) => {
//   const old = target.prototype[property];
//   target.prototype[property] = msg => {
//     msg = `${s}${s}${msg}${s}${s}`;
//     old(msg);
//   };
// };

// const dec = createDec("-");
// dec(Log, "print");

const log = new Log();
log.print("hello");
