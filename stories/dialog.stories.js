import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import '../components/dialog/dialog.css';
import Dialog from '../components/dialog/dialog';
import Button from '../components/button/button';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Dialog', module)
  .addDecorator(children => (
    <div style={{ textAlign: 'center', width: '100%', marginTop: 100 }}>
      {children()}
    </div>
  ))
  .add('Regular', () => (
    <Dialog>
      <Dialog.Title>Do you want to save?</Dialog.Title>
      <Dialog.Content>The previous content will be deleted.</Dialog.Content>
      <Dialog.Actions>
        <Button flat>Cancel</Button>
        <Button flat>Save</Button>
      </Dialog.Actions>
    </Dialog>
  ))
  .add('No Body', () => (
    <Dialog>
      <Dialog.Title>Do you want to save?</Dialog.Title>
      <Dialog.Actions>
        <Button flat>Cancel</Button>
        <Button flat>Save</Button>
      </Dialog.Actions>
    </Dialog>
  ));
