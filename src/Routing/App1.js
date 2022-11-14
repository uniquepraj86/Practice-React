
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
function App1(){

    return(
        <div>
            <h1> Wellcome to App1 !!!</h1>
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li>
            </ul>
            <BrowserRouter>
                <Routes>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<Services/>}/>
                </Routes>
            
            </BrowserRouter>
        
            
            
        </div>
    )
}

export default App1