import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/loading-dots/loading-dots.css';
import { LoadingDots } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('LoadingDots', module).add('Regular', () => <LoadingDots />);
