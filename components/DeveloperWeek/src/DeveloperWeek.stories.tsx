import React from 'react';
import { text } from '@storybook/addon-knobs';

import DeveloperWeek from '.';
import notes from '../README.md';

export default {
  title: 'Components|DeveloperWeek',
  parameters: { notes, jsx: { skip: 1 } },

  decorators: [
    (render: any) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        {render()}
      </div>
    )
  ]
};

export const BasicUsage = () => (
  <DeveloperWeek
    first={text('developer', 'developer')}
    second={text('week', 'week')}
  />
);
