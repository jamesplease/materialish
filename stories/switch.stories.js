import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/switch/switch.css';
import { Switch } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Switch
      onClick={action('clicked')}
      disabled={boolean('Disabled', false, 'PROPS')}
      checked={boolean('Checked', false, 'PROPS')}
    />
  ))
  .add('With Label', () => (
    <label
      style={{ fontSize: '16px', color: 'black', display: 'inline-block' }}>
      Click Me
      <Switch
        style={{ marginLeft: '5px' }}
        onClick={action('clicked')}
        disabled={boolean('Disabled', false, 'PROPS')}
        checked={boolean('Checked', false, 'PROPS')}
      />
    </label>
  ));
