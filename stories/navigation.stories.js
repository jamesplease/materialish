import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/navigation/navigation.css';
import { Navigation } from '../src/index';
import IconAlarmOn from '../icon-alarm-on';
import IconBugReport from '../icon-bug-report';
import IconFace from '../icon-face';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <Navigation
      vertical={boolean('Vertical', false, 'PROPS')}
      ripple={boolean('Ripple', false, 'PROPS')}>
      <Navigation.Item active>One</Navigation.Item>
      <Navigation.Item>Item Two Hundred and a half</Navigation.Item>
      <Navigation.Item ripple>Three</Navigation.Item>
    </Navigation>
  ))
  .add('With Icons', () => (
    <Navigation centered>
      <Navigation.Item>
        <IconAlarmOn />
      </Navigation.Item>
      <Navigation.Item active>
        <IconBugReport />
      </Navigation.Item>
      <Navigation.Item>
        <IconFace />
      </Navigation.Item>
    </Navigation>
  ));
