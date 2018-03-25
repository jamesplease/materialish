import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../components/menu/menu.css';
import { Menu } from '../index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Menu', module)
  .add('Regular', () => (
    <Menu>
      <Menu.Option>Option 1</Menu.Option>
      <Menu.Option>Option 2</Menu.Option>
      <Menu.Option>Option 3</Menu.Option>
      <Menu.Option>Option 4</Menu.Option>
      <Menu.Option>Option 5</Menu.Option>
      <Menu.Option>Option 6</Menu.Option>
      <Menu.Option>Option 7</Menu.Option>
      <Menu.Option>Option 8</Menu.Option>
      <Menu.Option>Option 9</Menu.Option>
      <Menu.Option>Option 10</Menu.Option>
      <Menu.Option>Option 11</Menu.Option>
      <Menu.Option>Option 12</Menu.Option>
      <Menu.Option>Option 13</Menu.Option>
      <Menu.Option>Option 14</Menu.Option>
    </Menu>
  ))
  .add('With Separators', () => (
    <Menu>
      <Menu.Option>Option 1</Menu.Option>
      <Menu.Option separator>Option 2</Menu.Option>
      <Menu.Option>Option 3</Menu.Option>
      <Menu.Option separator>Option 4</Menu.Option>
      <Menu.Option>Option 5</Menu.Option>
      <Menu.Option>Option 6</Menu.Option>
      <Menu.Option>Option 7</Menu.Option>
      <Menu.Option separator>Option 8</Menu.Option>
      <Menu.Option>Option 9</Menu.Option>
      <Menu.Option>Option 10</Menu.Option>
      <Menu.Option separator>Option 11</Menu.Option>
      <Menu.Option>Option 12</Menu.Option>
      <Menu.Option>Option 13</Menu.Option>
      <Menu.Option>Option 14</Menu.Option>
    </Menu>
  ))
  .add('With Title', () => (
    <Menu>
      <Menu.Title>Menu Title</Menu.Title>
      <Menu.Option>Option 1</Menu.Option>
      <Menu.Option separator>Option 2</Menu.Option>
      <Menu.Option>Option 3</Menu.Option>
      <Menu.Option separator>Option 4</Menu.Option>
      <Menu.Option>Option 5</Menu.Option>
      <Menu.Option>Option 6</Menu.Option>
      <Menu.Option>Option 7</Menu.Option>
      <Menu.Option separator>Option 8</Menu.Option>
      <Menu.Option>Option 9</Menu.Option>
      <Menu.Option>Option 10</Menu.Option>
      <Menu.Option separator>Option 11</Menu.Option>
      <Menu.Option>Option 12</Menu.Option>
      <Menu.Option>Option 13</Menu.Option>
      <Menu.Option>Option 14</Menu.Option>
    </Menu>
  ))
  .add('With Message', () => (
    <Menu>
      <Menu.Message>Menu loading...</Menu.Message>
    </Menu>
  ));
