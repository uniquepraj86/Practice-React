import React from "react";
import Table from "./Table";
import "./PropsStyle.css";

function UsingPropsForm() {
  const obj = [
    {
      name: "",
      email: "",
      password: "",
      city: "",
    },
  ];

  const [usingPropsForm, setUsingPropsForm] = React.useState([obj]);
  const [data,setData] = React.useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUsingPropsForm({ ...usingPropsForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...usingPropsForm };

    setData([...data, newData]);
    console.log(data);
    setUsingPropsForm({ name: "", email: "", password: "", city: "" });
  };

  return (
    <div className="parent">
      <h1 id=""> Information</h1>

      <div className="input">
        <form onSubmit={handleSubmit} id="UsingPropsForm">
          <label htmlFor="name">Name</label>{" "}
          <input
            type="text"
            autoComplete="off"
            value={usingPropsForm.name}
            name="name"
            id="name"
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>{" "}
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            value={usingPropsForm.email}
          />
          <label htmlFor="password">Password</label>{" "}
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInput}
            value={usingPropsForm.password}
          />
           <br/>
          <label htmlFor="text">City</label>{" "}
         
          <input
            type="text"
            name="city"
            id="city"
            onChange={handleInput}
            value={usingPropsForm.city}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Table data={data} />
    </div>
  );
}
export default UsingPropsForm;



















