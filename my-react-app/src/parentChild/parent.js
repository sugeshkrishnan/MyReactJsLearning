import React, {useCallback,useState} from 'react'
import Child from './child'

function Parent(){
const [parentText,setParentText] = useState("Parent")


const changeText = useCallback((parentText) => {
    setParentText(parentText);
  }, []);

 
  const sendAlert = () => {
    alert("Hello Shriyans")
  }
  const sendAlertNunu = () => {
    alert("Hello Nunu")
  }

  

    return(
        <><div style={{backgroundColor: "lightblue", width:"400px", height:"200px" }}>
            <h1>{parentText}</h1>
            <button onClick={()=> changeText("Parent")}> Reset</button>
            <button onClick={sendAlert}>Shriyans</button>
            <button onClick={sendAlertNunu}>Nunu</button>
            <Child changetextProp={changeText} />
        </div></>
    );

}
export default Parent