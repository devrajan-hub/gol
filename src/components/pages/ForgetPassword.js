import React,{Component,useState} from 'react';
import { NavLink,Link, useHistory, useParams, Redirect } from 'react-router-dom';
import Header from '../layout/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selfiimage from '../../../src/assets/images/selfi_images.jpg';
const ForgetPassword = () =>{
    const[user, setUser] = useState({
        email:""
    })
    let name, value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    const forgetPassword = async(e) => {
        e.preventDefault();
        const {email} = user;
        console.log('reguser',user);
        const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/users/forgot-password',{
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
        const userdata = await result.json();
        console.log('userdata',userdata);
    }
    return(
        <div className="fullpage">
            <header>
                <Header />
            </header>    
        <div className="login-container formfields">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-form">
                        <h1>Forgot Password?</h1>
                        <p className="">Enter your email address you’re using for your account below and we will send you password reset link</p>    
                        <form className="" method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control" id="" name="email" value={user.email} onChange={handleInputs} placeholder="E-mail" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={forgetPassword}>Request reset link</button>
                        </form>    
                        <p><Link className="greytext" to="/login">Back to login</Link></p>
                    </div>    
                </div> 
                <div className="col-md-6">   
                    <div className="selfi-image">
                        <img src={selfiimage} alt="selfiimage" />
                    </div>    
                </div>    
            </div>    
        </div>    
        </div>    
        </div>
    )
}
export default ForgetPassword;