import React, { useState, useEffect } from "react";
import { pickHour, pickMinutes } from "../../Shared/arrays";
import "../../styles/clock.css";
export default function Clock() {
  const date = new Date();

  const [hour, setHour] = useState(date.getHours()); //getting current hour
  const [minutes, setMinutes] = useState(date.getMinutes()); //getting current minute
  const [openHours, setOpenHours] = useState(false); //creating hook to open and close list of hours
  const [openMinutes, setOpenMinutes] = useState(false); //creating hook to open and close list of minutes

  //function to switch to next hour
  function switchMinutes() {
    if (minutes < 59) {
      setMinutes(minutes => minutes + 1);
    } else {
      if (hour < 23) {
        setHour(hour => hour + 1);
      } else {
        setHour(0);
      }
      setMinutes(0);
    }
  }

  //function to render time at format 00
  function renderTime(timeToRender: number) {
    if (timeToRender < 10) {
      return `0${timeToRender}`;
    } else {
      return `${timeToRender}`;
    }
  }

  //function to switch time every 60 seconds
  useEffect(() => {
    const timeout = setTimeout(switchMinutes, 60000);
    return () => clearInterval(timeout);
  }, [minutes]);

  return (
    <div className="clockContainer">
      {renderTime(hour)}:{renderTime(minutes)}
      <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
        <button
          onClick={() => setOpenHours(!openHours)}
          className="changeButton"
        >
          hour
        </button>
        {openHours &&
          pickHour.map(item => {
            return <div onClick={() => setHour(item)}>{item}</div>;
          })}
      </div>
      <div>
        <button
          onClick={() => setOpenMinutes(!openMinutes)}
          className="changeButton"
        >
          minutes
        </button>
        <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
          {openMinutes &&
            pickMinutes.map(item => {
              return <div onClick={() => setMinutes(item)}>{item}</div>;
            })}
        </div>
      </div>
    </div>
  );
}
