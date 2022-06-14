import Date from "../Date";
import "./index.css";

function LogItem(props) {
  return (
    <div className="item">
      <Date date={props.date}></Date>

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </div>
  );
}

export default LogItem;
