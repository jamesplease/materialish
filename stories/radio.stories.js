import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/radio/radio.css';
import { Radio } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Radio
      onClick={action('clicked')}
      disabled={boolean('Disabled', false, 'PROPS')}
      checked={boolean('Checked', false, 'PROPS')}
    />
  ))
  .add('With Label', () => (
    <Fragment>
      <label
        style={{ fontSize: '16px', color: 'black', display: 'inline-block' }}>
        One
        <Radio
          name="hello"
          value="One"
          style={{ marginLeft: '5px' }}
          onClick={action('clicked')}
          disabled={boolean('Disabled', false, 'PROPS')}
          checked={boolean('Checked', false, 'PROPS')}
        />
      </label>
      <label
        style={{ fontSize: '16px', color: 'black', display: 'inline-block' }}>
        Two
        <Radio
          name="hello"
          value="Two"
          style={{ marginLeft: '5px' }}
          onClick={action('clicked')}
          disabled={boolean('Disabled', false, 'PROPS')}
          checked={boolean('Checked', false, 'PROPS')}
        />
      </label>
      <label
        style={{ fontSize: '16px', color: 'black', display: 'inline-block' }}>
        Two
        <Radio
          name="hello"
          value="Three"
          style={{ marginLeft: '5px' }}
          onClick={action('clicked')}
          disabled={boolean('Disabled', false, 'PROPS')}
          checked={boolean('Checked', false, 'PROPS')}
        />
      </label>
    </Fragment>
  ));
