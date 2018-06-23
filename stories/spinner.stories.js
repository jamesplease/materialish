import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/spinner/spinner.css';
import { Spinner } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Spinner', module)
  .add('Regular', () => <Spinner />)
  .add('Monochromatic', () => (
    <Spinner style={{ '--mt-spinnerColor': '#666' }} />
  ));
