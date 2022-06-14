import { useState } from "react";

import Logs from "@/components/Logs";
import LogsForm from "@/components/LogsForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      date: new Date(2022, 5, 14, 10, 30),
      desc: "学习React",
      time: 60,
    },
    {
      date: new Date(2022, 5, 14, 1, 30),
      desc: "学习算法",
      time: 60,
    },
    {
      date: new Date(2022, 5, 14, 1, 30),
      desc: "学习JavaScript",
      time: 30,
    },
  ]);

  const addTODO = (newTODO) => {
    newTODO.id = Date.now() + "";
    setTodoList([...todoList, newTODO]);
  };

  const deleteTODO = (index) => {
    setTodoList((preState) => {
      const newTODO = [...preState]
      newTODO.splice(index, 1);
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
