
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home1 from './Home1'
import Services1 from './Services1'
import About1 from './About1'
function App2(){

    return(
        <div>
            <ul>
                <li><a href='/home1'>Home</a></li>
                <li><a href='/about1'>About</a></li>
                <li><a href='/services1'>Services</a></li>
            </ul>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Home/>}/> */}
                    <Route path='/home1' element={<Home1/>}/>
                    <Route path='/about1/:message' element={<About1/>}/>
                    <Route path='/services1' element={<Services1/>}/>
                </Routes>
            
            </BrowserRouter>
     
        </div>
    )
}

export default App2;