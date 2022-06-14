import Card from "@/UI/Card";
import LogItem from "@/components/LogItem";
import "./index.css";

const Logs = (props) => {
  return (
    <Card className="logs">
      {props.todoList.map((item, index) => (
        <LogItem
          {...item}
          key={item.desc}
          onDelTODO={() => props.onDelTODO(index)}
        />
      ))}

      {props.todoList.length === 0 && <p className="no-logs">当前没有计划！</p>}
    </Card>
  );
};

export default Logs;
