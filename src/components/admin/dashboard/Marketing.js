import React, {useEffect, useState} from 'react';
import Sidebar from '../Sidebar';
import {Navlink,Link} from 'react-router-dom';
import defaultimage from '../../../assets/images/default-image.jpg';
import addicon from '../../../assets/images/plus_icon.svg';
import dateFormat from 'dateformat';

const Marketing = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://viddey-backend.herokuapp.com/api/v1/articles", {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log('marketingresponse',response);
            setItems(response.payload);
        })
        .catch(err => { console.log(err); 
        });
    });

    var indents = [];
    for (var i = 0; i < 8; i++) {
        indents.push(<div className='col-md-3 marketing-block' key={i}>
            <div className="resource_block">
                <img src={defaultimage} />
                <div className="resources">
                    <span>16.04.2021</span>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
                    <Link to="/" className="edit-page">Edit</Link>
                </div>
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
                        <h1>Marketing resources</h1> 
                    </div>
                    <div className="clearfix"></div>
                    <div className="marketing-resources col-md-12">
                        <div className="row">
                            <div className="col-md-3 marketing-article">
                                <div className="article-resorces">
                                    <div className="article-block">
                                    <Link to="/add-article" className="">
                                        <img src={addicon} />
                                        <p>Create Article</p></Link>        
                                    </div>
                                </div>
                            </div>
                            {items.map(item => (
                                // datee = item.createdOn;
                                <div className='col-md-3 marketing-block' key={i}>
                                    <div className="resource_block">
                                        <img src={(item.coverImageURL) ? item.coverImageURL : defaultimage} />
                                        <div className="resources">
                                            <span>{dateFormat(item.createdOn, "d.m.yyyy")}</span>
                                            <h2>{item.title}</h2>
                                            <Link to={{pathname: "/edit-article", state: {article:item}}} className="edit-page">Edit</Link>
                                        </div>
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

export default Marketing;