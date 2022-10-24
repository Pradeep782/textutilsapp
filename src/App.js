

import './App.css';
import Alert from './components/Alert';
// import About from './components/About'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
     setAlert(null)
    }, 1500)
  }
  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode is enabled ", "Success:")
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Normal mode is enabled ", "Success:")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    
    <>
     {/* <Router> */}
        <Navbar title= "Textutils"  mode = {mode} aboutText="About Textutils" toggleMode = {toggleMode}></Navbar>
        <Alert alert={alert}/>
        <div className="container my-3">
          
          <TextForm heading="Enter the Text below to analyze" showAlert={showAlert} mode={mode}/>

          {/* <Routes> */}
            {/* <Route exact path="about" element = {<About/>} /> */}
             
          
            {/* <Route exact path="/" element={}/>
              */}

          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;

