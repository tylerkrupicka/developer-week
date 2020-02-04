import React from 'react';
import { text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import DeveloperWeek from '.';
import notes from '../README.md';

export default {
  title: 'Components|DeveloperWeek',
  parameters: { notes, jsx: { skip: 1 } },

  decorators: [centered]
};

export const BasicUsage = () => (
  <DeveloperWeek
    first={text('developer', 'developer')}
    second={text('week', 'week')}
  />
);
