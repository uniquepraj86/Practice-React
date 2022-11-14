import React from 'react'
import { useParams } from 'react-router-dom'

function About(){

    const param=useParams()

    return(
        <div>
            <h1>About Component!!!</h1>
            <p>This is about Component</p>
            <p>Message:{param.message}</p>
        </div>
    )
}

export default About
