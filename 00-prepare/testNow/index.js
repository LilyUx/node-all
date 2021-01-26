const path = require('path')
const fs = require('fs')

module.exports = class TestNow {

  /**
   * 生成测试文件夹
   * @param {*} sourcePath 当前文件地址
   */
  genJestSource(sourcePath = path.resolve('./')) {
    const testPath = `${sourcePath}/__test__`
    if (!fs.existsSync(testPath)) {
      fs.mkdirSync(testPath)
    }

    // 遍历代码文件
    let list = fs.readdirSync(sourcePath)
    list
      // 添加完成路径
      .map(v => `${sourcePath}/${v}`)
      // 过滤文件
      .filter(v => fs.statSync(v).isFile())
      // 排除测试代码
      .filter(v => v.indexOf('.spec') === -1)
      .map(v => this.genTestFile(v))
  }

  /**
   * 生成测试文件
   * @param {*} filename 文件名称
   */
  genTestFile(filename) {
    // console.log('filename', filename)
    const testFileName = this.getTestFileName(filename)

    // 判断此文件是否存在
    if (fs.existsSync(testFileName)) {
      console.log('该测试代码已存在', testFileName)
      return
    }

    const mod = require(filename)
    let source
    if (typeof mod === 'object') {
      source = Object.keys(mod)
                .map(v => this.getTestSource(v, path.basename(filename), true))
                .join('\n')
    } else if (typeof mod === 'function') {
      const basename = path.basename(filename)
      source = this.getTestSource(basename.replace('.js', ''), basename)
    }

    fs.writeFileSync(testFileName, source)
  }

  /**
   * 生成测试代码
   * @param {*} methodName 方法名
   * @param {*} classFile 文件名
   * @param {*} isClass 是否是class
   */
  getTestSource(methodName, classFile, isClass = false) {
    // console.log('getTestSource', methodName)
    return `
test('${'Test ' + methodName }', () => {
  const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile}')
  const ret = ${methodName}()
  // expect(ret).toBe('test run')
})
`
  }

  /**
   * 生成测试文件名
   * @param {*} filename 代码文件夹
   */
  getTestFileName(filename) {
    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    // // /abc/class.js
    // console.log(dirName) // abc
    // console.log(baseName) // class
    // console.log(extName) // js
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root:dirName + '/__test__/',
      base: testName
    })
  }
}
