import React, {Component} from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../../src/assets/images/saaslogo.png';
import '../../../src/assets/css/custom.css';
const Header = () =>{
    return(
        <div className="col-md-12 mainhedaer">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="col-md-9">
                    {/* <NavLink to='/'>Home</NavLink> */}
                </div>       
            </div>       
        </div>    
    )
}

export default Header;