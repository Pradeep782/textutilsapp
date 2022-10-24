import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  let cStyle = {
    color: 'blue'
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand"  style={cStyle} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link active"  style={cStyle} aria-current="page" href="#">Home</a>
       </li>
       {/* <li className="nav-item">
         <Link className="nav-link" style={cStyle} to="/about">{props.aboutText}</Link>
       </li> */}
     </ul>
     {/* <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-primary" type="submit">Search</button>
     </form> */}
    </div>
    </div>
    <div className={`form-check form-switch text- ${props.mode === 'light'? 'dark' : 'light'}`}>
      <input className="form-check-input my-3" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label mx-2 my-2" style={cStyle} htmlFor="flexSwitchCheckDefault">Enable&nbsp;DarkMode</label>
    </div>
    </nav>
  )
}



Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Set the about here'
};
