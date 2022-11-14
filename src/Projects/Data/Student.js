import React from "react";
import Table1 from "./table1";


function Student() {
  const userObj = {
    name: " ",
    email: " ",
    password: " ",
    address: " ",
  };
  const [user, setUser] = React.useState(userObj);
  const [userList, setUserList] = React.useState([]);

  const handleChange = (e) => {
    console.log(e.target);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

    function submit(e){
      e.preventDefault();
      setUserList([...userList, user]);
      document.getElementById("form").reset();
    }

    const edit = (index, userList) => {
      document.getElementById("name").value = userList[index].name;
      document.getElementById("email").value = userList[index].email;
      document.getElementById("password").value = userList[index].password;
      document.getElementById("address").value = userList[index].address;
    };

    const deleteD = (index) => {
      var Arr = [...userList];
      Arr.splice(index, 1);
      setUserList();
    };
  
  return (
    <div className="scroll-snap-align: center">
      <form id="form">
        <h3> Name :</h3>
        <input type="text" name="name" id="name" defaultValue={"Name"} onChange={handleChange} />
        <h3> Email :</h3>
        <input type="email" name="email"id="email" defaultValue={"email"} onChange={handleChange} />
        <h3> Password : </h3>
        <input type="password" name="password"id="password"defaultValue={"password"} onChange={handleChange} />
        <h3> Address :</h3>
        <textarea name="address" id="address" defaultValue={"address"} onChange={handleChange}  ></textarea>
        <br />
      </form>
      <br />
      <button onClick={submit}>Submit</button>
      <br />
      <Table1 userList={userList} handleEdit={edit} handledelete={deleteD} />
    </div>
  );
}

export default Student;
