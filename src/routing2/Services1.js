import React from 'react'
import { useLocation } from 'react-router-dom'

function Services(){

    const location=useLocation()

    return(
        <div>
            <h1>Services Component!!!</h1>
            <p>This is services Component</p>
            <p>Name : {location.state.name}</p>
        </div>
    )
}

export default Services
