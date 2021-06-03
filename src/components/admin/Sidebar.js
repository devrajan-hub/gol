import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../../src/assets/images/saaslogo.png';
import dashboardicon from '../../../src/assets/images/dashboard_icon.svg';
import marketingicon from '../../../src/assets/images/marketing_icon.svg';
import addicon from '../../../src/assets/images/add_icon.svg';
import '../../../src/assets/css/custom.css';

const Sidebar = () =>{
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
                            <img src={dashboardicon} /><NavLink to='/admin'>Dashboard</NavLink>
                        </li>
                        <li>
                            <img src={marketingicon} /><NavLink to='/marketing'>Marketing Resources</NavLink>
                        </li>
                        <li>
                            <img src={marketingicon} /><NavLink to='/songs-library'>Songs library</NavLink>
                        </li>
                        <li>
                            <img src={marketingicon} /><NavLink to='/filter-library'>Filters library</NavLink>
                        </li>
                    </ul>
                    
                    <ul className="bottommenu">
                        <li>
                            <NavLink to='/account-setting'>Account Setting <span>Admin</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Log Out</NavLink>
                        </li>
                    </ul>
                </div>   
            </div>   
        </div>   
    )
}
export default Sidebar;