import React, { useState } from 'react';
import '../css/Calendar.css';
import leftArrow from '../img/back.png';
import rightArrow from '../img/next.png';

export const Calendar = ({ monthsInYear, weekdays }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }

    return daysArray;
  };

  const handleMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };

  const handleYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  };

  const handleLeft = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleRight = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const handleDateClass = (date) => {
    return date && date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
      ? 'selected'
      : '';
  };

  return (
    <main>
      <h1>Calendar</h1>
      <div className='calendar-main'>
        <header>
          <img src={leftArrow} onClick={handleLeft} alt="Previous Month" />
          <select value={selectedDate.getMonth()} onChange={handleMonth}>
            {monthsInYear.map((month, index) => (
              <option value={index} key={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedDate.getFullYear()} onChange={handleYear}>
            {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <img src={rightArrow} onClick={handleRight} alt="Next Month" />
        </header>
        <div className='daysOfWeek'>
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className='dates'>
          {daysInMonth().map((date, index) => (
            <div key={index} className={`date ${handleDateClass(date)}`}>
              {date ? date.getDate() : ''}
            </div>
          ))}
        </div>
      </div>

      <p>Designed by <b>Dinesh Babu</b></p>
    </main>
  );
};
