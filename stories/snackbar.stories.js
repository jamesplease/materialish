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
      Oooops! Something went wrong
      <Button flat>Retry</Button>
    </Snackbar>
  ))
  .add('Without button', () => (
    <Snackbar>Oooops! Something went wrong</Snackbar>
  ));
