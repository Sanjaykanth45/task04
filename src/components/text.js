import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
         <h1>Task 4</h1>
         <h2>Show/Hide Text</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      
      {isVisible && <h2>This is the text to show or hide.</h2>}
    </div>
  );
};

export default ToggleText;
