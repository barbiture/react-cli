const fs = require('fs');
const path = require('path');
const create = require('./create');

const { componentName } = create;
const { componentPath } = create;


const styleCode = '';
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.css`),
  styleCode
);


