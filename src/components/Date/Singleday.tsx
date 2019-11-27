import React from "react";
import "../../styles/singleday.css";

interface singleDayProps {
  key: string;
  title: string;
}

export default function SingleDay(props: singleDayProps) {
  const { key, title } = props; //deconstructing props

  return (
    <div className="dayContainer" key={key}>
      {title.substr(0, 2)}
    </div>
  );
}
