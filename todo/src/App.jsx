import { useState } from "react";

import Logs from "@/components/Logs";
import LogsForm from "@/components/LogsForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      date: new Date(2022, 5, 14, 10, 30),
      desc: "Java课程设计",
      time: 50,
    },
    {
      id: 2,
      date: new Date(2022, 5, 16, 10, 30),
      desc: "写博客",
      time: 60,
    },
    {
      id: 3,
      date: new Date(2021, 5, 15, 1, 30),
      desc: "学习算法",
      time: 60,
    },
    {
      id: 4,
      date: new Date(2020, 5, 14, 1, 30),
      desc: "学习JavaScript",
      time: 30,
    },
    {
      id: 5,
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
