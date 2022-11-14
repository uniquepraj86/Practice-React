import React from 'react'
import {useNavigate} from 'react'
function Home(){
    
const message ="Hellow React";
const navigate = useNavigate()


    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is home Component</p>
        </div>
    )
}

export default Home
