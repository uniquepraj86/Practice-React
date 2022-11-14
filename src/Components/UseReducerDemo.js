import React from 'react'

const intialState={count:0}

const reducer=(state,action)=>{

    switch(action.type){
        case "increment":
            return {count:state.count+action.payload}
            
        case "decrement":
            return {count:state.count-1}
            
        default:
            return intialState    
    }
}


function UseReducerDemo(){

    const [state,dispatch]=React.useReducer(reducer,intialState)

    return(
        <div>
            <h1>Use Reducer</h1>
            <p>Count : {state.count}</p>
            <button type='button' onClick={()=>dispatch({type:"increment",payload:10})}>Add</button>
            <button type='button' onClick={()=>dispatch({type:"decrement"})}>Subtract</button>
        </div>
    )

}

export default UseReducerDemo