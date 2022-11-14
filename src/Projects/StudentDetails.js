import React,{useState} from 'react'

const StudentDetails =()=>{
  // let val
const[details,setDetails]=useState({
     name:" ",
     email:" ",
     password: " ",
     address: " "

});

const handleChange =(e)=>{
     const{name,value} = e.target;
     setDetails((prev)=> {
      return{...prev,[name]:value};
    
   });

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(details);
    // setDetails([...details,val])
    // document.getElementById("myform").reset()
  };

  return (
     <div id='myform'>
      <div className=''>
      <h1>Student Information</h1>
       <form onSubmit={handleSubmit}>
        <h3 >Name:<input type="text" name='name'onChange={handleChange}></input></h3>
        <h3>Email:<input type="email" name='email' onChange={handleChange}></input></h3>
        <h3>Password:{''}<input type="password" name='password'onChange={handleChange}/></h3>
        <h3>Address:<textarea name='address'onChange={handleChange}></textarea></h3>
        <button type="submit" onSubmit={handleSubmit}>Submit Form</button>
        {/* <ul>
        {
            details.map((x)=>(
                <li>{x}</li>
            ))
        }
       </ul> */}
      </form>
      </div>
     </div>
  )
}
export default StudentDetails