import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
}

const Counter = () => {
  const [counter, setCounter] =useState(0);
  const plus = () => {
    setCounter(counter + 1);
};
  const minus = () => {
    setCounter(counter - 1);
};

console.log("always~~"); // 누를때마다 console에 뜸

useEffect(() => {
  console.log("useEffect~~");
}, []); //처음 실행할때 한번만 console에 뜨고 안뜸(한번만 호출할때 사용)

useEffect(() => {
  console.log("counter change~~");
}, [counter]); //데이터 값이 변화했을때 뭔가를 하고 싶을때 사용

return (
  <div>
    <h1 style={{
      backgroundColor: "pink", color: "skyblue",}}>
      
      Total clicks: {counter}
    </h1>
    <Button text="+1" click={plus} />
    <Button text="-1" click={minus} />

    {/* {<button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button>} */}
  </div>
  );
};

export default Counter;
