import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../components/navigation/navigation.css';
import Navigation from '../components/navigation/navigation';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Navigation', module)
  .add('Horizontal', () => (
    <Navigation>
      <Navigation.Item>Item 1</Navigation.Item>
      <Navigation.Item active>Item 2</Navigation.Item>
      <Navigation.Item>Item 3</Navigation.Item>
      <Navigation.Item>Item 4</Navigation.Item>
    </Navigation>
  ))
  .add('Vertical', () => (
    <Navigation vertical>
      <Navigation.Item>Item 1</Navigation.Item>
      <Navigation.Item active>Item 2</Navigation.Item>
      <Navigation.Item>Item 3</Navigation.Item>
      <Navigation.Item>Item 4</Navigation.Item>
    </Navigation>
  ));
