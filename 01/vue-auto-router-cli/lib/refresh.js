const fs = require("fs");
const handlerbars = require("handlebars");
const chalk = require("chalk");

module.exports = async () => {
  // 获取列表
  // console.log(11);
  console.log(fs.readdirSync("./src/views"));
  const list = fs
    .readdirSync("./src/views")
    .filter(v => v !== "Home.vue")
    .map(v => ({
      name: v.replace(".vue", "").toLowerCase(),
      file: v,
    }));

  // 生成路由定义
  compile({ list }, "./src/router.js", "./template/router.js.hbs");
  // 生成菜单
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs");

  /**
   * 编译模板文件
   * @param {*} meta 数据
   * @param {*} filePath 输出文件
   * @param {*} templatePath 模板文件
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlerbars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`${filePath}创建成功`));
    }
  }
};
