const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const system = require('../../config/system');

/**
 * 映射指定路径下的所有指定后缀文件
 * @param {String} pathUrl  指定路径
 * @param {String} suffix   指定文件后缀
 * @param {Array}  filter   要过滤的文件列表
 */
module.exports.mapFiles = (pathUrl, suffix = 'js', filter = []) => {
  const tree = {};
  const [dirs, files] = _.partition(fs.readdirSync(pathUrl), p => {
    return fs.statSync(path.join(pathUrl, p)).isDirectory();
  });

  files.forEach( file => {
    if (path.extname(file) === `.${suffix}` && !filter.includes(file)){
      const fileName = path.basename(file).split('.')[0];
      tree[fileName] = require(path.join(pathUrl, file));
    }
  });
  return tree
}

/**
 * 在服务运行完毕打印字符图案
 */
module.exports.printStartCharPattern = () => {
  const pattern = [
    "",
            "           ▍ ★∴",
    　"　s ．t ．▍▍a．..r．█▍ ☆ ★∵t ..../ ",
    "　　◥█▅▅██▅▅██▅▅▅▅▅███◤ ",
    " 　 ．◥███████████████◤",
    "～～～～◥█████████████◤～～～～",
    "～～～～～～～～～～～～～～～～～～～～～～～～",
    `当前服务：localhost:${system.port}`,
    `graphql 服务：localhost:${system.port}${system.graphql.path}`,
  ];
  console.log(pattern.join('\n').cyan)
}
