import React, { useState, useEffect } from 'react';
function UseEffectHook() {
    const [count, setCount] = useState(0);
  
    // Similar to componentDidMount and componentDidUpdate:
    //useEffect will tell React that component needs to do something after render.

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
      
    });
    
    document.title = `You clicked ${count} times`;
    return (
      <div>
        
        <p>You clicked {count} times</p>
        
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default UseEffectHook