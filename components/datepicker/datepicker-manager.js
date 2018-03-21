import { Component } from 'react';

export default class DatePickerManager extends Component {
  render() {
    const { children = () => {} } = this.props;
    return children({
      ...this.state,
      goToNextMonth: this.goToNextMonth,
      goToPreviousMonth: this.goToPreviousMonth
    });
  }

  constructor() {
    super();
    const today = new Date();
    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1,
      0,
      0,
      0,
      0
    );

    this.state = {
      today,
      currentMonth,
      days: this.getDays(currentMonth)
    };
  }

  daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  getDays = month => {
    const days = Array.from(Array(42));
    var extras = (month.getDay() + 7) % 7; // How many spaces we need to leave
    for (
      let i = 1;
      i <= this.daysInMonth(month.getMonth() + 1, month.getFullYear());
      i++
    ) {
      days[i + extras - 1] = i;
    }
    return days;
  };

  goToNextMonth = () => {
    const nextMonth = new Date(
      this.state.currentMonth.getFullYear(),
      this.state.currentMonth.getMonth() + 1,
      1,
      0,
      0,
      0,
      0
    );

    this.setState({
      currentMonth: nextMonth,
      days: this.getDays(nextMonth)
    });
  };

  goToPreviousMonth = () => {
    const previousMonth = new Date(
      this.state.currentMonth.getFullYear(),
      this.state.currentMonth.getMonth() - 1,
      1,
      0,
      0,
      0,
      0
    );

    this.setState({
      currentMonth: previousMonth,
      days: this.getDays(previousMonth)
    });
  };
}
