import React,{useEffect} from "react";

function UseEffectDemo(){

// useEffect(()=>{
//     console.log('hiii');
// })


// useEffect(()=>{
//     console.log('hiii');
//     document.getElementById();
// },[])

const data =[
    {
    id:1,
    Name:'Praj',
    city: 'Akole'
},
{
    id:2,
    Name:'Meera',
    City:'Pune'
},
{
    id:3,
    Name:'Janhavi',
    City:'Mumbai' 
}

]

 const [ value,setValue]= React.useState('')
// useEffect(()=>{
//     console.log('hiii');

// },[value])


    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <ul>
                {
                   data.map((user)=>(
                    <li>{user.Name}</li>
                   ))
                }
            </ul>
        </div>
    )
}
export default UseEffectDemo



// what are the different ways to transfer the data in the component...........

// props
// routing
// callbackeventHandling
// redux
// context API


//   UseEffect-
//             It is a close replacement for ComponentDidMount,ComponentDidUpdate and ComponentWillUnmount
// 
// 