/* eslint-disable array-bracket-spacing */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1614305247031_932";

  // add your middleware config here
  config.middleware = ["errorHandler"];

  // config.default.js
  config.mongoose = {
    url: "mongodb://127.0.0.1:27017/egg_x",
    options: {
      // useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };

  config.jwt = {
    secret: "Great4-M",
    enable: true, // default is false
    match: /^\/api/, // optional
  };

  config.swaggerdoc = {
    dirScanner: "./app/controller",
    apiInfo: {
      title: "开课吧接口",
      description: "开课吧接口 swagger-ui for egg",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
