import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
 import TextForm from './Component/TextForm'
//  import About from './Component/pages/About'
//  import {BrowserRouter,  Routes, Route } from 'react-router-dom'




function App(){
    const [mode, setMode]=useState('light');
 

const toggleMode=()=>{
        if(mode ==='light'){
            setMode('dark')
            
        }else{
            setMode('light')
            
        }
        
    }
    return(
        <>
        {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
        <div className='container my-3'>
            {/* <Routes> */}
                {/* <Route path='/About' element={<About/>}></Route> */}
                {/* <Route path='/' element={}></Route> */}
                <TextForm heading='Enter the text to analyze'/>
            {/* </Routes> */}
        
        {/* <About></About> */}
        </div>
        {/* </BrowserRouter> */}
    </>
    )
}






export  default App