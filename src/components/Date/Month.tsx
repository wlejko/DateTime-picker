import React, { useState, useEffect } from "react";
import "../../styles/month.css";
import { daysInWeek } from "../../Shared/arrays";
import Singleday from "./Singleday";
import { getWeeksForMonth } from "../../Shared/functions";
import Clock from "../Clock/Clock";

export default function Month(props: {
  month: number;
  year: number;
  today: number;
}) {
  const { month, year, today } = props; //deconstructing props

  //rendering every day in week
  const createDays = daysInWeek.map(day => {
    return <Singleday key={day} title={day} />;
  });

  const [currentYear, setCurrentYear] = useState(year); //setting current year
  const [currentMonth, setCurrentMonth] = useState(month); //setting current month
  const [currentDay, setCurrentDay] = useState(today); //setting current day

  //function to creat list of days in week
  const weeks = getWeeksForMonth(currentMonth, currentYear);

  //function to render weeks, if there is empty day render empty div
  const renderWeek = (fullDate: Date | null, index: number) => {
    if (fullDate !== null) {
      const date = fullDate.getDate();
      return (
        <button
          className="Day"
          key={index}
          style={{ color: index === 0 ? "red" : "grey" }}
          onClick={() => setCurrentDay(date)}
        >
          {date}
        </button>
      );
    } else {
      return <div className="emptyDay"></div>;
    }
  };

  useEffect(() => {
    setCurrentMonth(month);
    setCurrentYear(year);
  }, [month, year]);

  const createWeeks = weeks.map((week, index) => {
    return (
      <div role="row" className="Week" key={index}>
        {week.map((item, index) => renderWeek(item, index))}
      </div>
    );
  });

  return (
    <div className="MonthContainer">
      <div className="dayContainer">{createDays}</div>
      {createWeeks}
      <div className="infoContainer">
        {" "}
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            margin: "12px",
            minWidth: "100px"
          }}
        >{`${currentDay}-${currentMonth + 1}-${currentYear}`}</div>
        <Clock />
      </div>
    </div>
  );
}
