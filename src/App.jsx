import { useState } from "react";

import Logs from "@/components/Logs";
import LogsForm from "@/components/LogsForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 123,
      date: new Date(2022, 5, 14, 10, 30),
      desc: "Java课程设计",
      time: 50,
    },
    {
      id: 12345,
      date: new Date(2022, 5, 16, 10, 30),
      desc: "写博客",
      time: 60,
    },
    {
      id: 456,
      date: new Date(2021, 5, 15, 1, 30),
      desc: "学习算法",
      time: 60,
    },
    {
      id: 678,
      date: new Date(2020, 5, 14, 1, 30),
      desc: "学习JavaScript",
      time: 30,
    },
    {
      id: 789,
      date: new Date(2022, 5, 16, 10, 30),
      desc: "学习React",
      time: 60,
    },
  ]);

  const addTODO = (newTODO) => {
    newTODO.id = Date.now() + "";
    setTodoList([...todoList, newTODO]);
  };

  const deleteTODO = (id) => {
    setTodoList((preState) => {
      const newTODO = preState.filter((item) => item.id !== id);
      return newTODO;
    });
  };

  return (
    <div className="app">
      <LogsForm onAddTODO={addTODO} />
      <Logs todoList={todoList} onDelTODO={deleteTODO} />
    </div>
  );
}

export default App;
