import React, { Component } from 'react'
import { useCallback, useState } from 'react'
import Login from '../Components/login'
import {Counter} from '../Components/childToParent'
import Parent from '../parentChild/parent'
import List from '../Lists/List'



function Main(){

const [count, setCount] = useState(0);



  const callback = useCallback((count) => {
    setCount(count);
  }, []);



  return (
    <div className="App">
     <h1>Learning React</h1>
     

      <Login name ="sugesh"/>
      <Counter parentCallback={callback}  />
 
      <h2>count {count}</h2>
      <br/>
      <br/>
<Parent/> <List/>
    </div>
  );
}

export default Main;
