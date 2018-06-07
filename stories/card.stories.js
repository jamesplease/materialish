import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/card/card.css';
import { Card } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Card', module)
  .add('Regular', () => (
    <Card depth={2} style={{ width: '200px', height: '200px' }}>
      This is a card with some content
    </Card>
  ))
  .add('Max depth', () => (
    <Card depth={5} style={{ width: '200px', height: '200px' }}>
      This is a card with some content
    </Card>
  ));
