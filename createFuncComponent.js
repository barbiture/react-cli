const fs = require('fs');
const path = require('path');
const create = require('./create.js');
const {componentPath} = create;
const {componentName} = create;
const componentCode = `import React from 'react'
import './${componentName}.css'

const ${componentName} = () => (
  <>
    ${componentName}
  </>
)

export default ${componentName}`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.js`),
  componentCode
);
