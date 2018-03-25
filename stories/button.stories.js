import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/button/button.css';
import '../components/ripple/ripple.css';
import { Button } from '../index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Button
      onClick={action('clicked')}
      disabled={boolean('Disabled', false, 'PROPS')}
      secondary={boolean('Secondary', false, 'PROPS')}
      compact={boolean('Compact', false, 'PROPS')}
      flat={boolean('Flat', false, 'PROPS')}
      ripple={boolean('Ripple', true)}
      raised={boolean('Raised', false)}
      stroked={boolean('Stroked', false)}>
      {text('Text', 'Hello Button')}
    </Button>
  ))
  .add('Button Group', () => (
    <Button.Group>
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        secondary={boolean('Secondary', false)}
        compact={boolean('Compact', false)}
        flat={boolean('Flat', false)}
        ripple={boolean('Ripple', true)}
        raised={boolean('Raised', false)}
        stroked={boolean('Stroked', false)}>
        {text('Text', 'Hello Button')}
      </Button>
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        secondary={boolean('Secondary', false)}
        compact={boolean('Compact', false)}
        flat={boolean('Flat', false)}
        ripple={boolean('Ripple', true)}
        raised={boolean('Raised', false)}
        stroked={boolean('Stroked', false)}>
        {text('Text', 'Hello Button')}
      </Button>
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        secondary={boolean('Secondary', false)}
        compact={boolean('Compact', false)}
        flat={boolean('Flat', false)}
        ripple={boolean('Ripple', true)}
        raised={boolean('Raised', false)}
        stroked={boolean('Stroked', false)}>
        {text('Text', 'Hello Button')}
      </Button>
    </Button.Group>
  ));
