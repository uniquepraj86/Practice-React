import React, { createContext, useContext } from "react";


const MyContext = createContext()
function ChildToParentUseContext() {

    const [number, setNumber] = React.useState(0)



    return (
        <MyContext.Provider value={{ number, setNumber }} >
            <div>
                <h1>UseContextDemo</h1>
                <p>Number is: {number}</p>
                <Checkcontext />
            </div>
        </MyContext.Provider>
    )
}
function Checkcontext() {

    const { number, setNumber } = useContext(MyContext)

    const handleChange = () => {
            setNumber(number+10)
    }
    return (
        <div>
            <h2>Child Component!!!</h2>
            <button onClick={handleChange}>change</button>
            <p>Number is: {number}</p>
        </div>
    )
}
export default ChildToParentUseContext