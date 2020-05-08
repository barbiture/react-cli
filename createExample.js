const fs = require('fs');
const path = require('path');
const create = require('./create');

const { componentName } = create;
const { componentPath } = create;

const exampleCode = `${componentName} examples:
###### ${componentName}
${'```js'}
import { ${componentName} } from 'react-rollup';

<${componentName} text="hello world"/>
${'```'}`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.examples.md`),
  exampleCode
);
