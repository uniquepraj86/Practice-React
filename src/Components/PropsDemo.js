import React from "react";

function Comp1(){
    const message ="Hello This is parent class"
    return(
<div>
    <Comp2 message={message}></Comp2>
</div>
    )
}
function Comp2(Props){
    return(
        <div>
            <h1>In Child component</h1>
            <br/>
            <h3>Message:{Props.message}</h3>
        </div>
    )
}
export default Comp1
