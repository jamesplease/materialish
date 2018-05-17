import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/checkbox/checkbox.css';
import { Checkbox } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Checkbox
      onClick={action('clicked')}
      disabled={boolean('Disabled', false, 'PROPS')}
      checked={boolean('Checked', false, 'PROPS')}
    />
  ))
  .add('With Label', () => (
    <label
      style={{ fontSize: '16px', color: 'black', display: 'inline-block' }}>
      Click Me
      <Checkbox
        style={{ marginLeft: '5px' }}
        onClick={action('clicked')}
        disabled={boolean('Disabled', false, 'PROPS')}
        checked={boolean('Checked', false, 'PROPS')}
      />
    </label>
  ));
