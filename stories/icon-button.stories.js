import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/icon-button/icon-button.css';
import '../src/ripple/ripple.css';
import { IconButton } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Icon Button', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <IconButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false, 'PROPS')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48">
        <path d="M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm-2.93-10.95l-4.24-4.24-2.12 2.12 6.36 6.36 12.01-12.01-2.12-2.12-9.89 9.89z" />
      </svg>
    </IconButton>
  ));