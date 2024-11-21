import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div >
        <h1>Task 3</h1>
        <h2>Toggle Button using ternary operator</h2>
    <button style={{height:"50px",width:"70px"}} onClick={toggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  
  </div>
  );
};


export default ToggleButton;
