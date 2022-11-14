import React, { useEffect } from 'react'

function UseEffectDemo(){

    // useEffect(()=>{
    //     console.log('hiiiiii');
    // })

    // useEffect(()=>{
    //     console.log('hiiiiii');
    // },[])

    const data=[{
        id:1,
        name:'A',
        city:'Pune'
    },{
        id:2,
        name:'B',
        city:'Mumbai'
    },{
        id:3,
        name:'C',
        city:'Bangalore'
    }]

    const[userList,setUserList]=React.useState([])

     const[value,setValue]=React.useState(10)

    useEffect(()=>{
        console.log('hiiiiii');
        setUserList(data)
    },[])

    const test=()=>{
        setValue(value+1)
    }

    
    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>Value : {value}</p>
            <ul>
                {
                    userList.map((user)=>(
                        <li>{user.name}</li>
                    ))
                }
            </ul>
            <button onClick={test}>Test</button>
        </div>
    )
}

export default UseEffectDemo