import react from "react";

function Car(props) {
  return (
    <>
      <li key={props.brand}>I am a {props.brand}</li>
    </>
  );
}
export default Car;
