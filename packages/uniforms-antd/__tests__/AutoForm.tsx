import React from 'react';
import { AutoForm } from 'uniforms-antd';
import { mount } from 'enzyme';

import createSchema from './_createSchema';

test('<AutoForm> - works', () => {
  const element = <AutoForm schema={createSchema()} />;
  const wrapper = mount(element);

  expect(wrapper.find(AutoForm)).toHaveLength(1);
});
