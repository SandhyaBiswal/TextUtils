import React, { useState } from 'react';



function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked" + text)
    let newText= text.toUpperCase()
    setText(newText)
    
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase()
    setText(newText)
   
  }
  const handleclearClick=()=>{
    let newText=('')
    setText(newText)
  }
  const handleCopy=()=>{
    let text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
   
  }

  const handleOnChange=(e)=>{
    // console.log('onchange')
    setText(e.target.value)
  }
  const [text,setText]=useState(' ')
  
  return (
    <>
    <div className='container'>
    <h2>{props.heading}</h2>
<div className="mb-3">
    {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to upperCase</button>
<button className='btn btn-primary mx-3'  onClick={handleLowClick}>Convert to lowerCase</button>
<button className='btn btn-primary mx-3'  onClick={handleclearClick}>Clear</button>
<button className='btn btn-primary mx-3'  onClick={handleCopy}>Copy</button>

    </div>
    <div className='container my-3'>
      <h1>Your Text summary</h1>
      <p>{text.split('').length} words and {text.length} characters</p>

    </div>
   
    </>
  );
}

export default TextForm;
