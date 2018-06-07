import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/dialog/dialog.css';
import { Dialog } from '../src/index';
import { Button } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Dialog', module).add('Regular', () => (
  <Dialog>
    <Dialog.Title>I am a modal</Dialog.Title>
    <Dialog.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        consequatur enim voluptates nobis perferendis voluptatibus alias modi
        voluptate dolorum ipsa amet, aliquam similique blanditiis iusto ipsam,
        atque beatae aliquid sit! Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
    </Dialog.Body>
    <Dialog.Actions>
      <Button flat>Nevermind</Button>
      <Button flat>Accept</Button>
    </Dialog.Actions>
  </Dialog>
));
