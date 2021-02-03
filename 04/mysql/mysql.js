(async () => {
  const mysql = require("mysql2/promise");

  const config = {
    host: "localhost",
    user: "root",
    password: "example",
    database: "study",
  };

  const connection = await mysql.createConnection(config);

  let ret = await connection.execute(
    `CREATE TABLE IF NOT EXISTS test ( id INT NOT NULL AUTO_INCREMENT, message VARCHAR(45) NULL, PRIMARY KEY (id))`
  );

  console.log("create", ret);

  ret = await connection.execute(`INSERT INTO test(message) VALUES(?)`);

  console.log("insert", ret);

  const [rows, fields] = await connection.execute(`SELECT * FROM test`);
  console.log(rows, fields);
})();
