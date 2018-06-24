import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/input/input.css';
import { TextArea } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <TextArea
      disabled={boolean('Disabled', false, 'PROPS')}
      error={boolean('Error', false, 'PROPS')}
      value={text(
        'Value',
        'It was the best of times, it was the worst of times.'
      )}
      placeholder={text('Placeholder', 'Please enter a value')}
    />
  ));
