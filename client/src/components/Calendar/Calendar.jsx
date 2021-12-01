import React, { useState } from "react";
import classes from "./Calendar.module.css";

const DATE_WIDTH = 52.5;

const Calendar = ({ setSelectedDate}) => {
  const today = new Date();
  let tempDates = [];
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const WEEKDAYEN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  for (let i = 0; i < 8; i++) {
    const tempDate = new Date(today);
    tempDate.setDate(tempDate.getDate() + i);
    tempDates[i] = {
      PlayDate:
        tempDate.getFullYear() +
        "-" +
        tempDate.getMonth() +
        "-" +
        tempDate.getDate(),
      IsPlayDate: "Y",
      Year: tempDate.getFullYear(),
      Month: tempDate.getMonth() + 1,
      Day: tempDate.getDate(),
      DayOfWeekKR: WEEKDAY[tempDate.getDay()],
      DayOfWeekEN: WEEKDAYEN[tempDate.getDay()],
      HolidayYN: "N",
    };
  }

  const [slideDateIndex, setSlideDateIndex] = useState(0);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const handleRightArrowClick = () => {
    if (slideDateIndex === tempDates.length - 8) return;
    setSlideDateIndex(slideDateIndex + 1);
  };
  const handleLeftArrowClick = () => {
    if (slideDateIndex === 0) return;
    setSlideDateIndex(slideDateIndex - 1);
  };

  const handleDateClick = (year, month, day, index) => {
    setCurrentDateIndex(index);


    let dayTemp = String(day).length === 1 ? `0${day}` : day
    setSelectedDate(year + "-" + month + "-" + dayTemp);
  };
  return (
    <div className={classes["calendar"]}>
      <div className={classes["center-container"]}>
        <ul
          style={{ transform: `translateX(-${DATE_WIDTH * slideDateIndex}px)` }}
        >
          {tempDates.map((date, index) => {
            return (
              <li key={date.PlayDate}>
                <div className={classes["month"]}>
                  {index === 0 || date.Day === 1 ? `${date.Month} 월` : ""}
                </div>
                <div
                  className={
                    currentDateIndex === index
                      ? `${classes["day"]} ${classes["active"]}`
                      : date.HolidayYN === "Y" || date.DayOfWeekEN === "SUN"
                      ? `${classes["day"]} ${classes["red"]}`
                      : date.DayOfWeekEN === "SAT"
                      ? `${classes["day"]} ${classes["blue"]}`
                      : classes["day"]
                  }
                  onClick={() =>
                    handleDateClick(date.Year, date.Month, date.Day, index)
                  }
                >{`${date.Day}`}</div>
                <div
                  className={
                    date.HolidayYN === "Y" || date.DayOfWeekEN === "SUN"
                      ? `${classes["day-of-week"]} ${classes["red"]}`
                      : date.DayOfWeekEN === "SAT"
                      ? `${classes["day-of-week"]} ${classes["blue"]}`
                      : classes["day-of-week"]
                  }
                >
                  {index === 0 ? "오늘" : `${date.DayOfWeekKR}`}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={`${classes["btn-arrow"]} ${classes["left"]}`}
        onClick={handleLeftArrowClick}
      >
        <span>
          <i className="fas fa-angle-left"></i>
        </span>
      </button>
      <button
        className={`${classes["btn-arrow"]} ${classes["right"]}`}
        onClick={handleRightArrowClick}
      >
        <span>
          <i className="fas fa-angle-right"></i>
        </span>
      </button>
    </div>
  );
};

export default Calendar;
