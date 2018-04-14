import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/button/button.css';
import '../src/ripple/ripple.css';
import { Button } from '../src/index';

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
  ));
