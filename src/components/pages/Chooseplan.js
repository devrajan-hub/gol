import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Navlink,Link, useHistory} from 'react-router-dom';
import Header from '../layout/Header';

const Chooseplan = () => {
    const history = useHistory();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        };
        axios.get('https://viddey-backend.herokuapp.com/api/v1/packages', { headers }).then(res =>{
            // console.log('pakages',res);
            setItems(res.data.payload);
        })
        .catch(err => {
            console.log('errresulkt',err);
        })
    })

    // const[packageinfo,setUser] = useState('');
    let packageType, packagename;
    const selectPackage = async(e) =>{
        var packagename = e.currentTarget.getAttribute('data-package');
        var packageinfo = {packageType:packagename}
        // setUser({...packageinfo, packageType:packagename});
        // console.log('packageinfo',packageinfo);
        // const{packageType} = packageinfo;
        const packagetype = JSON.stringify({packageType:packagename});
        console.log('campname',packagetype);
        const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/tickets',{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: packagetype
        });
        const packages = await result.json();
        console.log('packages',packages);
        if(packages.payload.id){
            history.push('/dashboard');
        }else{
            window.alert('Invalid Registration');
        }
    }    

    
    return(
        <div className="fullpage">
        <header>
            <Header />
        </header>   
        <div className="container">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 planheading">
                        <h1>Choose your plan</h1>
                        <p>You can change your plan in your account settings</p>
                    </div>
                    <div className="col-md-12">    
                    <div className="row">    
                    {items.map(item => (
                        //  primeblock = ((item.packageType == 'ENTERPRISE') ? 'dsgs' :'tujytuiti');
                        <div className="col-md-4">
                            <div className={(item.packageType == 'ENTERPRISE') ? 'planblocks primeblock' :'planblocks'}>
                                <div className="chooseplan">
                                    <div className="planname">
                                        <h2>{item.packageType}</h2>
                                        <div className="planprice">
                                            <span className="pricesymble">$</span><span className="price">{item.price}</span>
                                        </div>
                                        <span className="tagline">Per month</span>   
                                        <button type="submit" className="btn btn-primary btn-gradient btn-getplan" onClick={selectPackage} data-package={item.packageType}>Get Starter Plan</button> 
                                    </div>
                                    <hr className="borderclr"></hr>
                                    <div className="plandetail">
                                        <ul>
                                            <li className="activetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> One Project</li>
                                            <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Customized Filters</li>
                                            <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> QR code generator </li>
                                            <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Music branding development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                       {/* <div className="col-md-4">
                        <div className="planblocks">
                            <div className="chooseplan">
                                <div className="planname">
                                    <h2>Starter</h2>
                                    <div className="planprice">
                                        <span className="pricesymble">$</span><span className="price">0</span>
                                    </div>
                                    <span className="tagline">Per month</span>   
                                    <button type="submit" className="btn btn-primary btn-gradient btn-getplan">Get Starter Plan</button> 
                                </div>
                                <hr className="borderclr"></hr>
                                <div className="plandetail">
                                    <ul>
                                        <li className="activetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> One Project</li>
                                        <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Customized Filters</li>
                                        <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> QR code generator </li>
                                        <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Music branding development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="planblocks">
                            <div className="chooseplan">
                                <div className="planname">
                                    <h2>Pro</h2>
                                    <div className="planprice">
                                        <span className="pricesymble">$</span><span className="price">20</span>
                                    </div>
                                    <span className="tagline">Per month</span>   
                                    <button type="submit" className="btn btn-primary btn-gradient btn-getplan">Get Starter Plan</button> 
                                </div>
                                <hr className="borderclr"></hr>
                                <div className="plandetail">
                                    <ul>
                                        <li className="activetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> One Project</li>
                                        <li className="activetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Customized Filters</li>
                                        <li className="activetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> QR code generator </li>
                                        <li className="deactivetitle"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Music branding development</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div> 
                        <div className="col-md-4">
                        <div className="planblocks primeblock">
                            <div className="chooseplan">
                                <div className="planname">
                                    <h2>Enterprise</h2>
                                    <p>Individual Price</p>
                                    <span className="tagline">Full customized <br/> experience </span>  
                                    <button type="submit" className="btn btn-primary btn-gradient btn-getplan">Get Starter Plan</button> 
                                </div>
                                <hr className="borderclr"></hr>
                                <div className="plandetail">
                                    <ul>
                                        <li className="activetitle">One Project</li>
                                        <li className="deactivetitle">One Project</li>
                                        <li className="deactivetitle">One Project</li>
                                        <li className="deactivetitle">One Project</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            </div> */}
                        </div>   
                    </div>    
                </div>    
            </div>    
        </div>    
        </div>    
    )
}

export default  Chooseplan;