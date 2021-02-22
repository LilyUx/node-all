(async () => {
  const Sequelize = require("sequelize");

  const sequelize = new Sequelize(
    "study",
    "root",
    "example",
    {
      host: "localhost",
      dialect: "mysql",
      operatorsAliases: false,
    },
    { timestamps: false } // 去除时间戳
  );

  const Fruit = sequelize.define("Fruit", {
    name: { type: Sequelize.STRING(20), allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 },
  });

  let ret = await Fruit.sync();

  ret = await Fruit.create({
    name: "香蕉",
    price: 3.5,
  });

  console.log("create", ret);

  const Op = Sequelize.Op;
  ret = await Fruit.findAll({
    where: {
      price: {
        [Op.lt]: 4,
        [Op.gt]: 2,
      },
    },
  });
  console.log("select", JSON.stringify(ret));
})();
