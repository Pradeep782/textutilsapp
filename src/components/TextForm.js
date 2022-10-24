import React ,  { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('Uppercase button was clicked');
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Successfully coverted to uppercase", "Success:")
  }
  const handleLoClick = ()=>{
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert(" Successfully coverted to lowercase", "Success:")
    }
    
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert(" Successfully cleared the text", "Success:")
    }
    
    const handleVisitClick = ()=>{
      let newText = text.concat(' visit our website at www.student.com');
      setText(newText);
      props.showAlert(" Successfully displayed the address", "Success:")
      
  }

  // const handleCopy = ()=>{
  //   var text = document.getElementById("myBox");
  //   text = text.select();
  //   console.log(text);
  //   navigator.clipboard.writeText(text.value);
  // }
  const handleOnChange = (event)=>{
    // console.log('On change');
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here');
  // text = "new text" wrong way to change the text
  // setText("new text") right way to change the text
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="12" style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#042743' }}></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
         {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
         <button className="btn btn-primary mx-1" onClick={handleVisitClick}>Visit Us At</button>


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: 'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
