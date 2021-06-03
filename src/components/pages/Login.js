import React, {Component,useState} from 'react';
import { NavLink,Link, useHistory, useParams } from 'react-router-dom';
import Header from '../layout/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import selfiimage from '../../../assets/images/selfi_images.jpg';
import selfiimage from '../../../src/assets/images/selfi_images.jpg';
import {loginUser} from '../../actions/authAction';
function GetKey() {
	let { key } = useParams();
	return key;
}
const Login = ({ loginUser, isAuthenticated }) => {
    
    const [email, setUn] = useState('');
	const [password, setUp] = useState('');
	const [keyVal] = useState(GetKey());
    const onSubmit = e => {
		e.preventDefault();

		const userdata = { email, password };

		if (keyVal || typeof keyVal !== 'undefined') {
			userdata.keyVal = keyVal;
		}

		loginUser(userdata);
	};
    // const history = useHistory();
    // const [user, setUser] = useState({
    //     email:"", password:""
    // });
    // let name,value;

    // const handleInputs = (e) =>{
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({...user,[name]:value});
    // }

    // const loginUser = async(e) =>{
    //     e.preventDefault();
    //     const {email, password} = user;
    //     const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/login',{
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Access-Control-Allow-Credentials': 'false'
    //         },
    //         body: JSON.stringify({
    //             email, password
    //         })
    //     })
    //     const userinfo = await result.json();
    //     if(userinfo){
    //         console.log('userinfo',userinfo);
    //         // history.push('/dashboard');
    //     }else{
    //         window.alert('Invalid Login');
    //     }
    // }

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
                        <h1>Login</h1>
                        <p className="">Don't have account?<Link className="hvrcolor" to="/register"><span>Create account here</span></Link></p>    
                        <form className="" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" name="email" value={email} onChange={e => setUn(e.target.value)} placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="" name="password" value={password} onChange={e => setUp(e.target.value)} placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={loginUser} >Login</button>
                        </form>    
                        <p>By creating an account, I agree with GIF’s</p>
                        <p><Link className="" to="/"><span className="pinkclr hvrcolor">Privacy Policy</span></Link> and <Link className="" to="/"><span className="purpleclr hvrcolor">Terms of Service.</span></Link></p>
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

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
	loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;