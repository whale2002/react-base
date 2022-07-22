import Card from "@/UI/Card";
import BackDrop from "@/UI/BackDrop";
import "./index.css";

function Confirm(props) {
  return (
    <BackDrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>{props.confirmText}</p>
        </div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.onConfirm}>
            确认
          </button>
          <button onClick={props.onCancel}>取消</button>
        </div>
      </Card>
    </BackDrop>
  );
}

export default Confirm;
