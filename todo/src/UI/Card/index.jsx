import "./index.css";

function Card(props) {
  // 直接在组件标签中设置的类不会生效，必须传给子组件
  return <div className={`card ${props.className}`}>{props.children}</div>;
}

export default Card;
