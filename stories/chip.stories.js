import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/chip/chip.css';
import Chip from '../components/chip/chip';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Chip
      disabled={boolean('Disabled', false)}
      closeable={boolean('Closeable', false)}
      onCloseClick={action('CloseClicked')}
      onClick={action('Click')}
    >
      {text('Text', 'Hello Button')}
    </Chip>
  ));
