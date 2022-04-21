import { useState } from "react";

function MyForm() {
  //const [name, setName] = useState(""); //for one field

  const [inputs, setInputs] = useState({}); //for multiple fields

  const handleChange = (event) => {
    //this methos for multiple fields
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${inputs.name}  and age is ${inputs.age} and address is ${inputs.address}`
    );
  };

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Enter your address:
        <textarea
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default MyForm;
