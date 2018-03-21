import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../components/datepicker/datepicker.css';
import Datepicker from '../components/datepicker/datepicker';
import Manager from '../components/datepicker/datepicker-manager';
import '../components/button/button.css';
import '../components/ripple/ripple.css';
import Button from '../components/button/button';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

storiesOf('Datepicker', module)
  .add('Regular', () => (
    <Manager>
      {({ days, today, currentMonth, goToNextMonth, goToPreviousMonth }) => (
        <Datepicker>
          <Datepicker.Header>
            <Datepicker.CurrentYear>
              {today.getFullYear()}
            </Datepicker.CurrentYear>
            <Datepicker.CurrentDate>{`${dayNames[today.getDay()].slice(
              0,
              3
            )}, ${
              months[today.getMonth()]
            } ${today.getDate()}`}</Datepicker.CurrentDate>
          </Datepicker.Header>
          <Datepicker.Body>
            <Datepicker.CalendarContainer>
              <Datepicker.MonthBrowser>
                <Datepicker.MonthBrowser.BackButton
                  onClick={goToPreviousMonth}
                />
                <Datepicker.MonthBrowser.MonthLabel>{`${
                  months[currentMonth.getMonth()]
                } ${currentMonth.getFullYear()}`}</Datepicker.MonthBrowser.MonthLabel>
                <Datepicker.MonthBrowser.NextButton onClick={goToNextMonth} />
              </Datepicker.MonthBrowser>
              <Datepicker.WeekLegend>
                <Datepicker.WeekLegend.Label>S</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>M</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>T</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>W</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>T</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>F</Datepicker.WeekLegend.Label>
                <Datepicker.WeekLegend.Label>S</Datepicker.WeekLegend.Label>
              </Datepicker.WeekLegend>
              <Datepicker.DayContainer>
                {days.map((day, idx) => (
                  <Datepicker.Day
                    key={`${currentMonth.getMonth()}--${idx}`}
                    today={today.getDate() === day}>
                    {day}
                  </Datepicker.Day>
                ))}
              </Datepicker.DayContainer>
            </Datepicker.CalendarContainer>
          </Datepicker.Body>
          <Datepicker.Actions>
            <Button flat>Cancel</Button>
            <Button flat>OK</Button>
          </Datepicker.Actions>
        </Datepicker>
      )}
    </Manager>
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
