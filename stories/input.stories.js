import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/input/input.css';
import { Input } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Input', module)
  .addDecorator(withKnobs)

  .add('Regular', () => (
    <Input
      disabled={boolean('Disabled', false, 'PROPS')}
      error={boolean('Error', false, 'PROPS')}
      value={text('Value', 'Paris, France')}
      placeholder={text('Placeholder', 'Please enter a value')}
    />
  ));
