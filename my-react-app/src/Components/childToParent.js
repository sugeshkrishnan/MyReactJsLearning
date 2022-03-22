import React,{ useCallback, useState } from 'react'

export const Counter = ({ parentCallback,myValcallback }) => {
    const [count, setCount] = useState(0);
   
  
    return (
      <><button
            onClick={() => {
                setCount((count) => count + 1);
                parentCallback(count + 1);
            } }
        >
            increment
        </button>

        </>

      
    );
  };