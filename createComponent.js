const fs = require('fs');
const path = require('path');
const create = require('./create.js');

const { componentPath } = create;
const { componentName } = create;
const componentCode = `import React, { Component } from 'react'
import './${componentName}.css'

class ${componentName} extends Component {
  state() {}
  render() {
    return(
      <>
        ${componentName}
      </>
    )
  }
}

export default ${componentName}`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.js`),
  componentCode,
);

