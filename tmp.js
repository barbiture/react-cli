/*
 * const getPath = () => {
 *   const cliPath = args.path.split('/');
 *   const locatePath = process.cwd().split('/');
 *   // const componentName = ;
 *   if (cliPath.length > 1) {
 *     cliPath.forEach(pth => {
 *       const currentArray = [];
 *       currentArray.push(pth);
 *       const currentResolvePath = path
 *         .resolve(...srcPath, ...currentArray);
 *       if (!fs.existsSync(currentResolvePath)) {
 *         fs.mkdirSync(currentResolvePath);
 *       }
 *     });
 *
 *     return {
 *       cliPath,
 *       componentPath: [...srcPath, ...cliPath],
 *       componentName: cliPath[cliPath.length - 1],
 *       rootPath: [...srcPath, cliPath[0]],
 *     };
 *   }
 *   const current = locatePath
 *     .slice(locatePath.lastIndexOf(ROOTDIR), locatePath.length);
 *
 *   return {
 *     locatePath,
 *     componentPath: [...srcPath, ...locatePath],
 *     componentName: locatePath[locatePath.length - 1],
 *     rootPath: [...srcPath, current.splice(1, locatePath.length).join('/')],
 *   };
 * };
 *
 */

const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
require('dotenv').config();

const pathEnv = (() => {
  console.log(process.argv);
})();
console.log('path', path.basename(path.dirname(fs.realpathSync(__filename))));
/*
 * const ROOTDIR = 'src';
 *
 *
 * const args = minimist(process.argv);
 *
 *
 * const srcPath = [__dirname, '..', ROOTDIR];
 *
 * const getPath = (() => {
 *   const cliPath = args.path.split('/');
 *   const locatePath = process.cwd().split('/');
 *   if (cliPath.length > 1) {
 *     return cliPath;
 *   }
 *   const current = locatePath
 *     .splice(locatePath.indexOf(ROOTDIR) + 1, locatePath.length);
 *   current.push(cliPath[0]);
 *
 *   return current;
 * })();
 * console.log(getPath);
 */
