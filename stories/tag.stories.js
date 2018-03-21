import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/tag/tag.css';
import Tag from '../components/tag/tag';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Tag highlighted={boolean('Highlighted', false)}>
      {text('Text', 'Hello Chip')}
    </Tag>
  ))
  .add('Clickable', () => (
    <Tag highlighted={boolean('Highlighted', false)} onClick={action('Click')}>
      {text('Text', 'Hello Chip')}
    </Tag>
  ));
