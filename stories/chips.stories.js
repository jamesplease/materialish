import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/chip/chip.css';
import '../src/ripple/ripple.css';
import { ActionChip, ChoiceChip, FilterChip } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('Action Chip', () => (
    <ActionChip onClick={action('clicked')}>I am a chip</ActionChip>
  ))
  .add('Choice Chip', () => (
    <Fragment>
      <ChoiceChip onClick={action('clicked')} name="test">
        One
      </ChoiceChip>
      <ChoiceChip onClick={action('clicked')} name="test">
        Two
      </ChoiceChip>
      <ChoiceChip onClick={action('clicked')} name="test">
        Three
      </ChoiceChip>
    </Fragment>
  ))
  .add('Filter Chip', () => (
    <Fragment>
      <FilterChip onClick={action('clicked')} name="test">
        One
      </FilterChip>
      <FilterChip onClick={action('clicked')} name="test">
        Two
      </FilterChip>
      <FilterChip onClick={action('clicked')} name="test">
        Three
      </FilterChip>
    </Fragment>
  ));
