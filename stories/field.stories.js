import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/input/input.css';
import { Field } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Field', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Field>
      <Field.Label>Place of Residence</Field.Label>
      <Field.Input
        error={boolean('Error', false, 'Input Props')}
        disabled={boolean('Disabled', false, 'Input Props')}
        value={text('Value', 'Paris, France', 'Input Props')}
        placeholder={text('Placeholder', 'Please enter a value', 'Input Props')}
      />
    </Field>
  ))
  .add('Required', () => (
    <Field required>
      <Field.Label>Place of Residence</Field.Label>
      <Field.Input
        error={boolean('Error', false, 'Input Props')}
        disabled={boolean('Disabled', false, 'Input Props')}
        value={text('Value', 'Paris, France', 'Input Props')}
        placeholder={text('Placeholder', 'Please enter a value', 'Input Props')}
      />
    </Field>
  ))
  .add('With error', () => (
    <Field>
      <Field.Label>Place of Residence</Field.Label>
      <Field.Input
        error={boolean('Error', true, 'Input Props')}
        disabled={boolean('Disabled', false, 'Input Props')}
        value={text('Value', 'Paris, France', 'Input Props')}
        placeholder={text('Placeholder', 'Please enter a value', 'Input Props')}
      />
      <Field.ErrorMessage>There was an error.</Field.ErrorMessage>
    </Field>
  ));
