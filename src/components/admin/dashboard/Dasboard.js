import React, { useEffect, useState} from 'react';
import Sidebar from '../Sidebar';
import {Navlink,Link} from 'react-router-dom';
import searchicon from '../../../assets/images/search_icon.svg';

const AdminDashboard = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {

    // })
    var indents = [];
    for (var i = 0; i < 12; i++) {
        indents.push(<tr>
            <th scope="row" className="activesign"><span className="campsign activestatus"></span></th>
            <td><Link to="/company">Company name example </Link></td>
            <td>user.email.example@gmail.com</td>
            <td>1</td>
            <td>3</td>
        </tr>);
    }
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="admin-heading">
                        <h1>Dashboard</h1> 
                    </div>
                    <div className="activity-section col-md-12">
                        <div className="row">        
                            <div className="col-md-3 count-block">
                                <div className="activity">
                                    <h5>Sales</h5>
                                    <p className="activity-count">1,425,526</p>    
                                </div>
                            </div>
                            <div className="col-md-3 count-block">
                                <div className="activity">
                                    <h5>Active brands</h5>
                                    <p className="activity-count">1,354,760</p>    
                                </div>
                            </div>
                            <div className="col-md-3 count-block">
                                <div className="activity">
                                    <h5>Active campaigns</h5>
                                    <p className="activity-count">998,218</p>    
                                </div>
                            </div>
                            <div className="col-md-3 count-block">
                                <div className="activity">
                                    <h5>Total number of campaigns</h5>
                                    <p className="activity-count">1,002,236</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="db-details col-md-12">
                        <div className="row">
                            <div className="brands-title">
                                <h4>Brands database</h4>
                                <div className="search-db">
                                    {/* <input type="text" name="brandsearch" placeholder="Search" /> */}
                                    <img src={searchicon} /> <label>Search</label>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="row database-list">
                            <table class="table">
                                <thead class="database-thead">
                                    <tr>
                                        <th scope="col" className="active-status">STATUS</th>
                                        <th scope="col">COMPANY NAME</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">ACTIVE CAMPAIGNS</th>
                                        <th scope="col">TOTAL CAMPAIGNS</th>
                                    </tr>
                                </thead>
                                <tbody>{indents}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default AdminDashboard;