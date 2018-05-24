import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/avatar/avatar.css';
import { Avatar } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Avatar', module)
  .add('Regular', () => (
    <Avatar
      image="https://randomuser.me/api/portraits/women/50.jpg"
      onClick={action('clicked')}
    />
  ))
  .add('With Initials', () => (
    <Avatar initials="JP" onClick={action('clicked')} />
  ));
