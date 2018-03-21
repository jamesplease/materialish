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

storiesOf('Datepicker', module)
  .add('Regular', () => (
    <Datepicker>
      <Datepicker.Header>
        <Datepicker.CurrentYear>2018</Datepicker.CurrentYear>
        <Datepicker.CurrentDate>Sat, May 9</Datepicker.CurrentDate>
      </Datepicker.Header>
      <Datepicker.Body>
        <Datepicker.DaysContainer>
          {numDays.map((day, idx) => (
            <Datepicker.Day today={idx === 11}>
              {idx < 3 ? '' : idx > 33 ? '' : idx - 2}
            </Datepicker.Day>
          ))}
        </Datepicker.DaysContainer>
      </Datepicker.Body>
      <Datepicker.Actions>
        <Button flat>Cancel</Button>
        <Button flat>OK</Button>
      </Datepicker.Actions>
    </Datepicker>
  ))
  .add('Year', () => (
    <Datepicker>
      <Datepicker.Header>
        <Datepicker.CurrentYear>2018</Datepicker.CurrentYear>
        <Datepicker.CurrentDate>Sat, May 9</Datepicker.CurrentDate>
      </Datepicker.Header>
      <Datepicker.Body>
        <Datepicker.YearsContainer>
          <Datepicker.Year>2015</Datepicker.Year>
          <Datepicker.Year>2016</Datepicker.Year>
          <Datepicker.Year>2017</Datepicker.Year>
          <Datepicker.Year today>2018</Datepicker.Year>
          <Datepicker.Year>2019</Datepicker.Year>
          <Datepicker.Year>2020</Datepicker.Year>
          <Datepicker.Year>2021</Datepicker.Year>
          <Datepicker.Year>2022</Datepicker.Year>
          <Datepicker.Year>2023</Datepicker.Year>
        </Datepicker.YearsContainer>
      </Datepicker.Body>
      <Datepicker.Actions>
        <Button flat>Cancel</Button>
        <Button flat>OK</Button>
      </Datepicker.Actions>
    </Datepicker>
  ));
