import React from "react";
import "./index.css";

function Date(props) {
  // 获取月份
  const month = props.date.toLocaleString("zh-CN", { month: "long" });
  // 获取日期
  const date = props.date.getDate();

  return (
    <div className="data">
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  );
}

export default Date;
