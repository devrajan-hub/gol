import React, {useEffect, useState} from 'react';
import Sidebar from '../Sidebar';
import { NavLink,Link } from 'react-router-dom';
import closeicon from '../../../assets/images/close_icon.svg';
import searchicon from '../../../assets/images/search_icon.svg';

const FilterLibrary = () => {
    const [items, setItems] =  useState([]);
    useEffect(() => {        
        fetch("https://viddey-backend.herokuapp.com/api/v1/filters", {
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
    })
    var indents = [];
    for (var i = 0; i < 12; i++) {
        indents.push(<div className='col-md-2 filter-block' key={i}>
            <div className="f_block">
                <div className="filter_image"></div>
                <h4>Filter Name</h4>
            </div>
            <div className="btns-block">
                <Link to='/' className="preview-btn">Preview</Link>
                <button type="button" className="delete-btn">Delete</button>
            </div>    
        </div>);
    }
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="headingblock">
                        <h1>Filters library</h1>                         
                    </div>
                    <div className="clearfix"></div>
                    <div className="search-block">
                        <div className="filter-section">
                            <div className="search-db">
                                <img src={searchicon} /> <label>Search</label>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="small range-name mr-2">-</span>
                                <input type="range" className="form-range" id="slider"></input>
                                <span className="small range-name ml-2">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="filter col-md-12">
                        <div className="row">
                            {items.map(item => (
                                <div className='col-md-2 filter-block' key={i}>
                                    <div className="f_block">
                                        <div className="filter_image"></div>
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="btns-block">
                                        <Link to='/' className="preview-btn">Preview</Link>
                                        <button type="button" className="delete-btn">Delete</button>
                                    </div>    
                                </div>      
                            ))}
                            {/* {indents} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterLibrary;