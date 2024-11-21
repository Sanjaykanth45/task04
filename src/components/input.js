import React, { useState } from 'react';

const InputDisplay = () => {
  const [inputText, setInputText] = useState('');

  const Input = (event) => setInputText(event.target.value);

  return (
    <div>
         <h1>Task 2</h1>
         <h2>Dynamic Input Field:</h2>
      <input style={{height:"30px"}}
        type="text"
        placeholder="Type here"
        value={inputText}
        onChange={Input}
      />
     
      <p>Current Input: {inputText}</p>
    </div>
  );
};

export default InputDisplay;
