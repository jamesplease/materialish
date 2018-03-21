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

DatePicker.CalendarContainer = class DatePickerCalendarContainer extends Component {
  render() {
    const { children, onNextMonthClicked } = this.props;
    return <div className="mt-datePicker_allDaysContainer">{children}</div>;
  }
};

DatePicker.MonthBrowser = class DatePickerMonthBrowser extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker_monthContainer ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

DatePicker.MonthBrowser.MonthLabel = class DatePickerMonthBrowserMonthLabel extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-datePicker_monthName ${className}`} {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.MonthBrowser.BackButton = class DatePickerMonthBrowserBackButton extends Component {
  render() {
    const { className = '', ...props } = this.props;
    return <i className={`mt-datePicker_backArrow ${className}`} {...props} />;
  }
};

DatePicker.MonthBrowser.NextButton = class DatePickerMonthBrowserNextButton extends Component {
  render() {
    const { className = '', ...props } = this.props;
    return <i className={`mt-datePicker_nextArrow ${className}`} {...props} />;
  }
};

DatePicker.WeekLegend = class DatePickerWeekLegend extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div
        className={`mt-datePicker_weekdaysContainer ${className}`}
        {...props}>
        {children}
      </div>
    );
  }
};

DatePicker.WeekLegend.Label = class DatePickerWeekLegendLabel extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-datePicker_dayName ${className}`} {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.DayContainer = class DatePickerDayContainer extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-datePicker_daysContainer ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

DatePicker.Day = class DatePickerDay extends Component {
  render() {
    const { children, className = '', today = false, ...props } = this.props;
    return (
      <p
        className={`mt-datePicker_day ${
          today ? 'mt-datePicker_day-today' : ''
        } ${className}`}
        {...props}>
        {children}
      </p>
    );
  }
};

DatePicker.YearsContainer = class DatePickerYearsContainer extends Component {
  render() {
    const { children } = this.props;
    return <div className="mt-datePicker_yearContainer">{children}</div>;
  }
};

DatePicker.Year = class DatePickerYear extends Component {
  render() {
    const { children, className = '', today = false, ...props } = this.props;
    return (
      <p
        className={`mt-datePicker_year ${
          today ? 'mt-datePicker_year-today' : ''
        } ${className}`}
        {...props}>
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
