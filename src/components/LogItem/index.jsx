import { useState } from "react";
import Confirm from "@/UI/Confirm";
import Card from "@/UI/Card";
import Date from "../Date";
import "./index.css";

function LogItem(props) {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteItemHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };

  const confirmHandler = () => {
    props.onDelTODO();
  };

  return (
    <Card className="item">
      {showConfirm && (
        <Confirm
          confirmText="该操作不可恢复，是否继续？"
          onCancel={cancelHandler}
          onConfirm={confirmHandler}
        />
      )}

      <Date date={props.date}></Date>

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>

      <div>
        <div onClick={deleteItemHandler} className="delete">
          X
        </div>
      </div>
    </Card>
  );
}

export default LogItem;
