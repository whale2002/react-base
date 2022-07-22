import Card from "@/UI/Card";
import { useState } from "react";
import "./index.css";

const LogsForm = (props) => {
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const descChangeHandler = (e) => {
    setInputDesc(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newTODO = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };

    props.onAddTODO(newTODO);

    setInputDate("");
    setInputDesc("");
    setInputTime("");
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>

        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            onChange={descChangeHandler}
            value={inputDesc}
          />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            onChange={timeChangeHandler}
            value={inputTime}
          />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
