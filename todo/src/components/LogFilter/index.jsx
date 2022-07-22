function LogFilter(props) {
  return (
    <div>
      年份：
      <select onChange={props.onYearChange} value={props.year}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default LogFilter;
