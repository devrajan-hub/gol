import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../../src/assets/images/saaslogo.png';
import dashboardicon from '../../../src/assets/images/dashboard_icon.svg';
import marketingicon from '../../../src/assets/images/marketing_icon.svg';
import addicon from '../../../src/assets/images/add_icon.svg';
import '../../../src/assets/css/custom.css';

const Sidebar = () =>{
    
    const [items, setItems] = useState([]);
    useEffect(() => {        
        fetch("https://viddey-backend.herokuapp.com/api/v1/campaigns", {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            setItems(response.payload);
        })
        .catch(err => { console.log(err); 
        });
        // const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/campaigns ',{
        //     method:"GET",
        //     headers:{
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'true',
        //         'Access-Control-Allow-Headers': '*',
        //     },
        //     body: JSON.stringify({
        //         firstName, lastName, companyName, email, password
        //     })
        // })
    })
    // console.log('itemsdg',items);

    const logout = () =>{
        localStorage.clear();
        window.location.href = '/';
    }

    return(
        <div className="col-md-12 sidebar pd-left0 pd-right0">
            <div class="leftsidebar">
                <div className="sidebar-logo">
                    <img src={logo} alt="sidebarimg" /> 
                </div>
                <h4>MANAGEMENT</h4>
                <div className="sidebar-menu">   
                    <ul className="topmenu">
                        <li className="active">
                            <img src={dashboardicon} /><NavLink to='/dashboard'>Dashboard</NavLink>
                        </li>
                        <li>
                            <img src={marketingicon} /><NavLink to='/marketing-resources'>Marketing Resources</NavLink>
                        </li>
                    </ul>
                    <h3>Your Campaigns</h3>
                    <ul className="middlemenu">
                        <li>
                            <img src={addicon} /><NavLink to='/campaign'>New campaign</NavLink>
                        </li>
                        <hr className="bottomborder"></hr>
                        {items.map(item => (
                            //  postlink = `/camp-setting/${item.id}`;
                            <li key={item.id}>
                                {/* <NavLink to={`/camp-setting/${item.id}`}>{item.name}</NavLink> */}
                                <NavLink to={{ pathname: "/camp-setting", data: item.id }}>{item.name}</NavLink>
                            </li>
                        ))}
                        {/* <li>
                            <NavLink to='/camp-setting'>Campaign Setting</NavLink>
                        </li> */}
                    </ul>
                    
                    <ul className="bottommenu">
                        <li>
                            <NavLink to='/account-setting'>Account Setting <span>PRO</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/' onClick={logout}>Log Out</NavLink>
                        </li>
                    </ul>
                </div>   
            </div>   
        </div>   
    )
}
export default Sidebar;