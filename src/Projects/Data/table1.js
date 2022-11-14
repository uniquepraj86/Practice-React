import React from "react";

const Table1 = ({ userList,handleEdit, handledelete }) => {
  return (
    <div className="table">
      <table >
        <tr>
          <td> name</td>
          <td>email</td>
          <td>password</td>
          <td>address</td>
        </tr>
        {userList.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.address}</td>

            <td>
              <button onClick={() => handleEdit(index,userList)}>Edit</button>

              <button onClick={() => handledelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table1;