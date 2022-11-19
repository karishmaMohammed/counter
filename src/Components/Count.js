import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  let style = {
    countStyle: { fontSize: "10em", margin: 0 },
    buttonStyle: {
      fontSize: "1.2em",
      padding: "10px",
      borderRadius: "10px",
      margin: "5px",
    },
  };
	const increment = () => {
   if (count >= 0 && count <= 9){
		setCount((prevCount) => prevCount + 1)
  }/*else{
    alert("You Can't Increment more than 10")
   //<button style={style.buttonStyle} onClick={increment}>Reset</button>
    setCount(0)
  }*/
}
	const decrement = () => {
    if(count >=1){
		setCount(count - 1)
	}else{
    alert("Error! You can't further decrement")
    setCount(0)
  }}

  const reset = () => {
    setCount(0)
  }

  return (
    <>

      <p style={style.countStyle}>{count}</p>
      <button style={style.buttonStyle} onClick={reset}>Go Back to 0</button>
			<button style={style.buttonStyle} onClick={increment} >Increment</button>
			<button style={style.buttonStyle} onClick={decrement}>Decrement</button>
    </>
  );
};

export default Count;

