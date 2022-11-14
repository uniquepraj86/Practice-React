import React from "react";
// import "./formop.css";

const Formop = ({ users, handleEdit, handleDelete }) => {
  return (
    <div className="table">
      <table id="mytable">
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Email</td>
          <td>Password</td>
          <td>Birth Date</td>
          <td>Post Events</td>
        </tr>

        {/* Rendering the array accepted as props from newForm.js 
        using "map" Method */}

        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.Age}</td>
            <td>{user.Email}</td>
            <td>{user.Password}</td>
            <td>{user.birthDate}</td>

            <td>
              <button onClick={() => handleEdit(index, users)}>Edit</button>

              <button onClick={() => handleDelete(index)}>Delete</button>

            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Formop;
