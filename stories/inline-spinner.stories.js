import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/inline-spinner/inline-spinner.css';
import { InlineSpinner } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('InlineSpinner', module).add('Regular', () => <InlineSpinner />);
