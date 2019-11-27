import React, { useState } from "react";
import "../../styles/datepicker.css";
import Month from "./Month";
import { getNameOfMonth } from "../../Shared/functions";

export default function DatePicker() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth()); //getting current month
  const [year, setYear] = useState(date.getFullYear()); // getting current year
  const nameOfMonth = getNameOfMonth(month); //getting name of current month
  const today = date.getDate(); //getting current day

  return (
    /* creating container for date and time picker */
    <div className="container">
      <div className="titleContainer">
        <div className="forTitle">
          <button
            className="changeButton"
            disabled={year === 0}
            onClick={() => setYear(year - 1)}
          >
            {"<"}
          </button>
          {year}
          <button className="changeButton" onClick={() => setYear(year + 1)}>
            {">"}
          </button>
        </div>
        <div className="forTitle">
          <button
            className="changeButton"
            disabled={month === 0}
            onClick={() => setMonth(month - 1)}
          >
            {"<"}
          </button>
          {nameOfMonth}
          <button
            className="changeButton"
            disabled={month === 11}
            onClick={() => setMonth(month + 1)}
          >
            {">"}
          </button>
        </div>
      </div>

      <Month month={month} year={year} today={today} />
    </div>
  );
}
