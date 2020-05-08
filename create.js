const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
require('dotenv').config();

const args = minimist(process.argv);
const srcPath = [__dirname, '..', process.env.ROOT_DIR];
const arrPath = (() => {
  const cliPath = args.path.split('/');
  if (cliPath.length > 1) {
    return cliPath;
  }

  return `${process.env.LIB_SRC}/${cliPath[0]}`.split('/');
})();
const currentArray = [];
arrPath.forEach(el => {
  currentArray.push(el);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) {
    fs.mkdirSync(currentResolvePath);
  }
});
const componentName = arrPath[arrPath.length - 1];


const componentPath = [...srcPath, ...arrPath];
const rootPath = [...srcPath, arrPath[0]];
const componentRoot = arrPath.splice(1, arrPath.length).join('/');

const indexCode = `export { default } from './${componentName}'`;
fs.writeFileSync(path.resolve(...componentPath, 'index.js'), indexCode);

const indexRootCode = `
export { default as ${componentName} } from './${componentRoot}'\r\n`;
fs.appendFile(path.resolve(...rootPath, 'index.js'), indexRootCode, err => {
  if (err) {
    console.error(err);
  }
});
module.exports = {
  componentName,
  componentPath,
};
require('./createExample');
require('./createTest');
require('./createStyle');
