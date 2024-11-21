import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
        <h1>Task 1</h1>
      <h2>Counter: {count}</h2>
      <button style={{backgroundColor:"green",width:"100px",height:"50px",fontFamily:"sans-serif",fontSize:"medium"}}  onClick ={increment}>Increment</button>
      <button style={{backgroundColor:"red",width:"100px",height:"50px",marginLeft:"20px",fontFamily:"sans-serif",fontSize:"medium"}} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
