import ReactDOM from "react-dom";
import "./index.css";

const backDropRoot = document.getElementById("backdrop");

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backDrop">{props.children}</div>,
    backDropRoot
  );
};

export default BackDrop;
