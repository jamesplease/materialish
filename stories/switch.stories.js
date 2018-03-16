import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/switch/switch.css';
import Switch from '../components/switch/switch';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Switch', module)
  .add('Regular', () => (
    <Switch onChange={action('onChange')}>Toggle me</Switch>
  ))
  .add('No Label', () => <Switch onChange={action('onChange')} />);
