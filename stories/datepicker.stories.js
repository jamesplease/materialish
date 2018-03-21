import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../components/datepicker/datepicker.css';
import Datepicker from '../components/datepicker/datepicker';
import '../components/button/button.css';
import '../components/ripple/ripple.css';
import Button from '../components/button/button';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

const numDays = Array.apply(null, { length: 42 });

storiesOf('Datepicker', module).add('Regular', () => (
  <Datepicker>
    <Datepicker.Header>
      <Datepicker.CurrentYear>2018</Datepicker.CurrentYear>
      <Datepicker.CurrentDate>Sat, May 9</Datepicker.CurrentDate>
    </Datepicker.Header>
    <Datepicker.Body>
      <Datepicker.DayContainer>
        {numDays.map((day, idx) => (
          <Datepicker.Day>
            {idx < 3 ? '' : idx > 33 ? '' : idx - 2}
          </Datepicker.Day>
        ))}
      </Datepicker.DayContainer>
    </Datepicker.Body>
    <Datepicker.Actions>
      <Button flat>Cancel</Button>
      <Button flat>OK</Button>
    </Datepicker.Actions>
  </Datepicker>
));
