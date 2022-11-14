import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Employee from "./Employees";
// import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom'


function Edit() {
  const userObj={
    
    name:"",
    age:"",
  }
  const[id,setId]=React.useState("")
  const[user,setUser]=React.useState(userObj)

  const handleChange=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
  }

  let history = useNavigate();


  var index = Employee.map(function (e) {
    return e.id
  }).indexOf(id);

  const handleSubmit = (e) => {
    console.log(user);
    console.log(index);
    console.log(user.name);
    e.preventDefault();

    
   Employee.splice(index,0,user);
    // let a = Employee(index);
    // a.Name = name;
    // a.Age = age;
    
    history("/")
  }

  useEffect(() => {
  //   setName(localStorage.getItem('Name'))
  //   setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('Id'))

  }, [])

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>

        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Enter Name" name="name" required onChange={handleChange}>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Enter Age" name="age" required onChange={handleChange}>
          </Form.Control>
        </Form.Group>

        <Link>
          <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Link>
      </Form>
    </div>
  )

}
export default Edit;