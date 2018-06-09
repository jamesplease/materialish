import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/snackbar/snackbar.css';
import { Snackbar, Button } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Snackbar', module)
  .add('Regular', () => (
    <Snackbar>
      There was an error.
      <Button flat ripple={false}>
        Retry
      </Button>
    </Snackbar>
  ))
  .add('Without button', () => <Snackbar>There was an error.</Snackbar>);
