import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/progress-bar/progress-bar.css';
import { ProgressBar } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <ProgressBar
      loaded={number('Loaded', 10)}
      buffered={number('Buffered', 70)}
      indeterminate={boolean('Indeterminate', false)}
    />
  ));
