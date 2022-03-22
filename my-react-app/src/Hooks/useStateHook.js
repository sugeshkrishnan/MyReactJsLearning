import React, {useState} from 'react'

function UseStateHook(){
const [color,setColor] = useState("red")
const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

return(
<>
<h1>My favorite color is {color}!</h1>
<div style={{backgroundColor: color, width:"100px", height:"100px" }}></div>
<button onClick={() => setColor("green")}>Green</button>
<button onClick={() => setColor("blue")}>Blue</button>
<br/>
<br/>
<h1>Use state in Objects</h1>
      <p>
        It is a {car.color} {car.brand} {car.model} from {car.year}.
      </p>
      <button onClick={() => setCar({brand:"Audi",model:"Q7",year:"2020",color:"blue"})}>Audi</button>

</>

)

}

export default UseStateHook