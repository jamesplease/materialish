import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/checkbox/checkbox.css';
import Checkbox from '../components/checkbox/checkbox';

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
      labelAlignment={select('Label Alignment', alignmentOptions, 'right')}>
      Check me
    </Checkbox>
  ))
  .add('No Label', () => <Checkbox onChange={action('onChange')} />);
