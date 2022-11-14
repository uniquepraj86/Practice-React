import React from "react";
import Formop from "../Forms/formop";
// import "./newForm.css";

function NewForm() {
  const userObj = {
    firstName: "",
    lastName: "",
    Age: "",
    Email: "",
    Password: "",
    birthDate: "",
  };

  const [user, setUser] = React.useState(userObj);
  const [users, setUsers] = React.useState([]);
  const [editedUser, setEditObj] = React.useState({});

  function handleChange(event) {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setUsers([...users, user]);
    document.getElementById("myform").reset();
  }

  const updateData=({index})=> {
    const temp = [...users];
    temp.splice(index, 1, user);
    setUsers(temp);
  }

  const editData = (index, users) => {
    setEditObj({
      firstName: users[index].firstName,
      lastName: users[index].lastName,
      Age: users[index].Age,
      Email: users[index].Email,
      Password: users[index].Password,
      birthDate: users[index].birthDate,
    });

    return(
      <updateData index={index} />
    )
  };

  const deleteData = (index) => {
    var newArr = [...users];
    newArr.splice(index, 1);
    setUsers(newArr);
  };

  return (
    <div className="container">
      <br />
      <h1>INPUT FORM USING PROPS</h1>
      <br />
      <br />
      <form id="myform">
        <div id="firstName">First Name</div>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.firstName}
        ></input>
        <br />
        <br />

        <div id="lastName">Last Name</div>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.lastName}
        ></input>
        <br />
        <br />

        <div id="Age">User Age</div>
        <input
          type="number"
          name="Age"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.Age}
        ></input>
        <br />
        <br />

        <div id="mail">User Email</div>
        <input
          type="email"
          name="Email"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.Email}
        ></input>
        <br />
        <br />

        <div id="password">User Password</div>
        <input
          type="password"
          name="Password"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.Password}
        ></input>
        <br />
        <br />

        <div id="birthDate">Birth Date</div>
        <input
          type="date"
          name="birthDate"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.birthDate}
        ></input>
      </form>
      <br />
      <button onClick={submit}>Submit</button>
      <button onClick={updateData}>Update</button>
      <br />
      <br />

      <Formop
        users={users}
        handleEdit={editData}
        handleDelete={deleteData}
      />
      <br />
      <br />

      <br />
    </div>
  );
}

export default NewForm;






















