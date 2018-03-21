import React, { Component, Fragment } from 'react';

class DatePicker extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker ${className}`} {...props}>
        {children}
      </div>
    );
  }
}

DatePicker.Header = class DatePickerHeader extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker_header ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

DatePicker.CurrentYear = class DatePickerCurrentYear extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-datePicker_selectedYear ${className}`} {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.CurrentDate = class DatePickerCurrentDate extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-datePicker_selectedDay ${className}`} {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.Body = class DatePickerBody extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker_body ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

DatePicker.DayContainer = class DatePickerDaysContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <div className="mt-datePicker_monthContainer">
          <i className="mt-datePicker_backArrow" />
          <p className="mt-datePicker_monthName">May 2018</p>
          <i className="mt-datePicker_nextArrow" />
        </div>
        <div className="mt-datePicker_weekdaysContainer">
          <p className="mt-datePicker_dayName">S</p>
          <p className="mt-datePicker_dayName">M</p>
          <p className="mt-datePicker_dayName">T</p>
          <p className="mt-datePicker_dayName">W</p>
          <p className="mt-datePicker_dayName">T</p>
          <p className="mt-datePicker_dayName">F</p>
          <p className="mt-datePicker_dayName">S</p>
        </div>
        <div className="mt-datePicker_daysContainer">{children}</div>
      </Fragment>
    );
  }
};

DatePicker.Day = class DatePickerDay extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-datePicker_day ${className}`} {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.Actions = class DatePickerActions extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker_actionsContainer ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

export default DatePicker;
