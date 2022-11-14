// import "./form.css"
// import React, { useState } from "react";

// function Form() {
//   const [Fname, setFname] = useState(null);
//   const [Lname, setLname] = useState(null);
//   const [Age, setAge] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getFname(userFname) {
//     console.log(userFname.target.value);
//     setFname(userFname.target.value);
//   }
//   function getLname(userLname) {
//     console.log(userLname.target.value);
//     setLname(userLname.target.value);
//   }
//   function getAge(userLname) {
//     console.log(userLname.target.value);
//     setAge(userLname.target.value);
//   }

//   return (
//     <div className="form">
//         <br/>
//       <h1 class="display-6">Enter The First Name :</h1>

//       <input type="text" onChange={getFname}></input>
//       <br />
//       <br />
//       <h1 class="display-6">Enter The Last Name :</h1>

//       <input type="text" onChange={getLname}></input>
//       <br />
//       <br />
//       <h1 class="display-6">Enter Your Age :</h1>

//       <input type="number" onChange={getAge}></input>
//       <br />
//       <br />
//       <button type="button" class="btn btn-outline-primary" onClick={() => setPrint(true)}>Print Data</button>

//       <br />
//       <br />
//       <div className="print">
//       {print ? <div className="print">USER FIRST NAME :{Fname}</div> : null}
//       <br />
//       {print ? <div className="print">USER LAST NAME :{Lname}</div> : null}
//       <br />
//       {print ? <div className="print">USER AGE :{Age}</div> : null}
//       </div>
//     </div>
//   );
// }

// export default form;

// *************************************************************************************

//              STUDENT INFORMATION

// *************************************************************************************


// import React,{useState} from 'react'

// const StudentDetails =()=> {

//   const [details,setDetails] =useState({
//     rollno:"",
//     name:"",
//     email:"",
//     passward:"",
//     address:""
    
//   })
  
//   const handleChange =(e)=>{
//     const{name,value} = e.target


//    setDetails((prev)=>{
//    return{...prev,[name]:value}
//    })
//   };

//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     document.getElementById("details").reset()
//   }
   

//   return (
    
//    <div>
//      <form id='details' onSubmit={handleSubmit}>
//       <h3>RollNo: <input type="number" name=' rollno' onChange={handleChange} /></h3>
//       <h3> Name :   <input type="text"name='name' onChange={handleChange}/></h3>
//       <h3>E-mail: <input type="email" name='email' onChange={handleChange}/></h3>
//       <h3>Passward: {""}<input type="password" name='password' onChange={handleChange}/></h3>
//       <h3>Address: <textarea name='address'onChange={handleChange} ></textarea> </h3>
//       <button type="submit">submit</button>
//     </form>
//      <ul>
//      {
//         details.map((x)=>(
//              <li>{x}</li>
//          ))
//      }
//     </ul>
//    </div>
//   )
// }
// export default StudentDetails