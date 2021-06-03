import React,{useEffect} from 'react';
import axios from 'axios';
import {Navlink,Link} from 'react-router-dom';
import Header from '../layout/Header';

const Chooseplan = () => {
    useEffect(() => {
        axios.get('https://viddey-backend.herokuapp.com/api/v1/packages').then(res =>{
            console.log('pakages',res);
        })
        .catch(err => {
            console.log('errresulkt',err);
        })
    })
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
                        <div className="col-md-4">
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
                            </div>
                        </div>   
                    </div>    
                </div>    
            </div>    
        </div>    
        </div>    
    )
}

export default  Chooseplan;