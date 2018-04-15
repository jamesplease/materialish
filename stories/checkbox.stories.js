import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/checkbox/checkbox.css';
import { Checkbox } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

const alignmentOptions = ['left', 'right'];

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Checkbox
      onChange={action('onChange')}
      disabled={boolean('Disabled', false, 'PROPS')}
      labelAlignment={select('Label Alignment', alignmentOptions, 'right')}>
      Check me
    </Checkbox>
  ))
  .add('No Label', () => <Checkbox onChange={action('onChange')} />);