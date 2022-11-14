
import React from 'react'

function StateEx() {
   let val
   const[values,setValues]=React.useState([])

   const handleChange = (event)=>{
         val=event.target.value
   }

   const addValue =(e)=>{
       e.preventDefault()
       setValues([...values,val])
       document.getElementById("myform").reset()  //clears the form
   }
   
 return (
   <div>
      <h1>State Demo !!!</h1>
      <p>{val}</p>
      <form id='myform'>
       <input type="text" onChange={handleChange}/>
     
       <br/>
      <button onClick={addValue}>Add Values</button>
      </form>
      <ul>
       {
           values.map((x)=>(
               <li>{x}</li>
           ))
       }
      </ul>
   </div>
 )
}
export default StateEx