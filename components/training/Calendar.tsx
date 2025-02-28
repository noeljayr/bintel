import React from "react";

type CalendarProps = {
  startDate: string; // e.g. "2025-03-03T08:00+02:00"
  duration: number; // e.g. 3
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Weekday labels starting with Monday
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar: React.FC<CalendarProps> = ({ startDate, duration }) => {
  // Parse the start date (including time zone info).
  const start = new Date(startDate);

  // Compute the end date based on the duration (highlight `duration` days total).
  const end = new Date(start);
  end.setDate(end.getDate() + duration - 1);

  // Get the year and month from the *start* date
  const year = start.getFullYear();
  const month = start.getMonth();

  // Number of days in the given month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the month name
  const monthName = monthNames[month];

  // Determine the day of the week for the 1st of the month.
  // JavaScript's getDay() returns 0 for Sunday, 1 for Monday, etc.
  // We want the week to start on Monday.
  const firstDayOfMonth = new Date(year, month, 1);
  const firstWeekDay = firstDayOfMonth.getDay();
  const blankDays = firstWeekDay === 0 ? 6 : firstWeekDay - 1;

  // Generate an array of days in the month and prepend blank cells.
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarCells = Array(blankDays).fill(null).concat(daysArray);

  // Helper to check if two dates are the same calendar day
  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return (
    <div className="flex flex-col w-full gap-2">
      <span className="month-name font-semibold pb-2 w-full text-center">
        {monthName} {year}
      </span>
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium">
        {weekDays.map((day, index) => (
          <span key={index} className="weekday">
            {day}
          </span>
        ))}
      </div>
      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {calendarCells.map((cell, index) => {
          if (cell === null) {
            // Render an empty cell for padding.
            return <span key={`empty-${index}`} className="day empty" />;
          }
          const currentDate = new Date(year, month, cell);

          // Determine the background color for this day
          let dateClass = "";
          if (isSameDay(currentDate, start)) {
            dateClass = "start-date"; // e.g., greenish
          } else if (isSameDay(currentDate, end)) {
            dateClass = "end-date"; // e.g., redish
          } else if (currentDate >= start && currentDate <= end) {
            dateClass = "in-between"; // e.g., yellowish
          }
          return (
            <span key={cell} className={`day ${dateClass} text-center`}>
              {cell}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
