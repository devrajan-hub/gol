import React,{Component,useState} from 'react';
import {Navlink,Link, useHistory} from 'react-router-dom';
import selfiimage from '../../../src/assets/images/selfi_images.jpg';
import Header from '../layout/Header';
const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        firstName:"", lastName:"", companyName:"", email:"", password:""
    })
    let name, value;

    const handleInputs = (e) =>{
        // console.log('e',e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    const PostData = async(e) =>{
        e.preventDefault();
        const {firstName, lastName, companyName, email, password} = user;
        console.log('reguser',user);
        const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/users ',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName, lastName, companyName, email, password
            })
        })

        const userdata = await result.json();
        if(userdata.payload.id){
            console.log('userdata',userdata);
            history.push('/plans');
        }else{
            window.alert('Invalid Registration');
        }
        
    }

    return (
        <div className="fullpage">
        <header>
            <Header />
        </header>   
        <div className="register-container">
            <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <div className="register-form formfields">
                        <h1>Create Account</h1>
                        <p>Already have an account? <Link className="hvrcolor" to="/login">Login</Link></p>
                        <form method="POST">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" className="form-control" name="firstName" id="firstname" value={user.firstname} onChange={handleInputs}  placeholder="First Name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="password" className="form-control" name="lastName" id="lastname" value={user.lastname} onChange={handleInputs} placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="companyName" id="companyname" value={user.companyname} onChange={handleInputs} placeholder="Company Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" id="password"  value={user.password} onChange={handleInputs} placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-gradient" onClick={PostData}>Create Account</button>
                        </form> 
                        <p>By creating an account, I agree with GIF’s</p>
                        <p><Link to="/"><span className="pinkclr hvrcolor">Privacy Policy</span></Link> and <Link to="/"><span className="purpleclr hvrcolor">Terms of Service.</span></Link></p>
                    </div>
                </div>
                <div className="col-md-6">    
                    <img src={selfiimage} alt="selfiimage" />
                </div>    
            </div>    
            </div>    
        </div>    
        </div>    
    )
}

export default Register;