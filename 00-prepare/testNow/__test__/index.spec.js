
/*
 * @Author: your name
 * @Date: 2021-01-25 10:58:20
 * @LastEditTime: 2021-01-25 14:23:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\00-prepare\testNow\__test__\index.spec.js
 */
const fs = require('fs')
test('集成测试 测试生成代码文件', () => {
  // 准备环境
  // 删除测试文件夹
  fs.rmdirSync(__dirname + '/data/__test__', {
    recursive: true
  })

  const src = new (require('../index'))()

  src.genJestSource(__dirname + '/data')
})

// test("测试测试代码生成", () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestSource('fun', 'class')
//   console.log('ret', ret)
//   expect(ret).toBe(`
// test('Test fun', () => {
//   const fun = require('../class')
//   const ret = fun()
//   // expect(ret).toBe('test run')
// })
// `)
// })

// test('测试文件名生成', () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestFileName('/abc/class.js')
//   console.log('getTestFileName', realpath)
//   expect(ret).toBe("/abc/__test__/class.spec.js")
// })