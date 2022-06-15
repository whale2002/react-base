import { useState } from "react";
import Card from "@/UI/Card";
import LogItem from "@/components/LogItem";
import LogFilter from "@/components/LogFilter";
import "./index.css";

const Logs = (props) => {
  const [year, setYear] = useState(2022);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setYear(+e.target.value);
  };

  const filteredTodoList = props.todoList.filter(
    (item) => item.date.getFullYear() === year
  );

  return (
    <Card className="logs">
      <LogFilter year={year} onYearChange={changeHandler} />
      {filteredTodoList.map((item, index) => (
        <LogItem
          {...item}
          key={item.desc}
          onDelTODO={() => props.onDelTODO(item.id)}
        />
      ))}

      {props.todoList.length === 0 && <p className="no-logs">当前没有计划！</p>}
    </Card>
  );
};

export default Logs;
