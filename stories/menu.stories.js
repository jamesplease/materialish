import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/menu/menu.css';
import { Menu } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Menu', module).add('Regular', () => (
  <Menu>
    <Menu.Item>Option one</Menu.Item>
    <Menu.Item>Option two</Menu.Item>
    <Menu.Item>Option three</Menu.Item>
    <Menu.Separator />
    <Menu.Item>Option four</Menu.Item>
    <Menu.Item>Option five</Menu.Item>
    <Menu.Item>Option six</Menu.Item>
  </Menu>
));
