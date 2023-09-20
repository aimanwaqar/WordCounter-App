import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <div className="bg-primary rounded ms-2" onClick = {()=>{props.modeChange('primary')}}style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-danger rounded ms-2" onClick = {()=>{props.modeChange('danger')}}style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-success rounded ms-2" onClick = {()=>{props.modeChange('success')}}style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-warning rounded ms-2" onClick = {()=>{props.modeChange('warning')}}style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
                    
                </div>
                    <div className={`form-check form-switch mx-2 text-${props.mode === 'dark'?'light':'dark'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.modeChange(null)} }id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText : 'About Us'
};