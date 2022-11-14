import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home1(){

    const message="Hello React!!!"

    const navigate=useNavigate()

    const person={
        id:1,
        name:'John',
        city:'Pune'
    }

    const gotoAbout=()=>{
        navigate(`/about/${message}`)  // /about/Hello React
    }

    const gotoService=()=>{
        navigate(`/services`,{
            state:person
        })
    }

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is home Component</p>

            <button onClick={gotoAbout}>Go to About</button>
            <button onClick={gotoService}>Go to Service</button>
            
        </div>
    )
}

export default Home1
