import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/elevation/elevation.css';
import { Elevation } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Elevation', module)
  .add('Depth - 0', () => (
    <Elevation
      depth={0}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ))
  .add('Depth - 1', () => (
    <Elevation
      depth={1}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ))
  .add('Depth - 2', () => (
    <Elevation
      depth={2}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ))
  .add('Depth - 3', () => (
    <Elevation
      depth={3}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ))
  .add('Depth - 4', () => (
    <Elevation
      depth={4}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ))
  .add('Depth - 5', () => (
    <Elevation
      depth={5}
      style={{ width: '200px', height: '200px', padding: '20px' }}>
      This is an elevation with some content
    </Elevation>
  ));
