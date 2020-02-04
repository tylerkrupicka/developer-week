import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';

import Button, { sizes } from '.';
import notes from '../README.md';

export default {
  title: 'Components|Button',
  parameters: { notes, jsx: { skip: 2 } },
  decorators: [centered]
};

const themes = ['intuit', 'turbotax', 'quickbooks'] as const;

export const BasicUsage = () => (
  <Button
    size={select('Size', sizes, 'large')}
    theme={select('Theme', themes, 'intuit')}
    text={text('Text', 'Hello')}
    onClick={action('Click!')}
    onKeyPress={e => {
      if (e.key === 'Enter') {
        action('Enter!');
      }
    }}
  />
);
