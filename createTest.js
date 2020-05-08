const fs = require('fs');
const path = require('path');
const create = require('./create');

const { componentName } = create;
const { componentPath } = create;


const testCode = `import React from 'react'
import { shallow } from 'enzyme'

import ${componentName} from './${componentName}'

describe('<${componentName} />', () => {
  it('should render', () => {
    const wrapper = shallow(<${componentName} />)
    expect(wrapper).toBeDefined()
  })
})`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.test.js`),
  testCode
);

