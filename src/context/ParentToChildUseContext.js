import React, { createContext, useContext } from "react";


const MyContext = createContext()
function ParentToChildContext(){

    const [number, setNumber] = React.useState(0)
    const handleChange=()=>{
    setNumber(number+10)
    }
    return(
        <MyContext.Provider value={number} >
        <div>
            <h1>UseContextDemo</h1>
            <p>Number is: {number}</p>
            <button type="button" onClick={handleChange}>Change</button>
            <Checkcontext/>
        </div>
        </MyContext.Provider>
    )
}
function Checkcontext(){

    const number=useContext(MyContext)
    return(
        <div>
            <h2>Child Component!!!</h2>
            <p>Number is: {number}</p>
        </div>
    )
}
export default ParentToChildContext