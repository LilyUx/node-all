/*
 * @Author: your name
 * @Date: 2020-12-15 19:15:34
 * @LastEditTime: 2021-01-25 10:52:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\helloworld\__test__\index.spec.js
 */
// test('test hello', () => {
// 	const hello = require('../index')
// 	console.log('hello', hello)
// 	expect(hello).toBe('Hello world')
// })

test("test Hello World", () => {
  const hello = require('../index')
  console.log("hello", hello)
  expect(hello).toBe("Hello world2")
})