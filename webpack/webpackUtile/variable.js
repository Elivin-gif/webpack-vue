const path = require("path");

//构建目录
const DIST_PATH = path.resolve(__dirname, "../../", "dist");
//源码目录
const SRC_PATH = path.resolve(__dirname, "../../", "src");
//public 目录
const PUBLIC_PATH = path.resolve(__dirname, "../../", "public");
//根节点目录
const ROOT_PATH = path.resolve(__dirname, "../../");


module.exports = {
  DIST_PATH,
  SRC_PATH,
  PUBLIC_PATH,
  ROOT_PATH,
};
