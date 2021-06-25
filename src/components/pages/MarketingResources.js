import React,{useState, useEffect} from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import picicon from '../../assets/images/pic_icon.svg';
import defaultimage from '../../assets/images/default-image.jpg';

const MarketingResources = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch("https://viddey-backend.herokuapp.com/api/v1/articles", {
    //         "method": "GET",
    //         "headers": {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log('marketingresponse',response);
    //         setItems(response.payload);
    //     })
    //     .catch(err => { console.log(err); 
    //     });
    // });

    var indents = [];
    for (var i = 0; i < 8; i++) {
        indents.push(<div className='col-md-3 marketing-block' key={i}>
            <div className="resource_block">
                <img src={defaultimage} />
                <div className="resources">
                    <span>16.04.2021</span>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
                    <Link to="/single-marketing" className="learn-more">Learn more</Link>
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
                    <div className="heading-block">
                        <h1>Marketing Resources</h1> 
                    </div>
                    <div className="marketing-resources col-md-12">
                        <div className="row">{indents}</div>
                    </div>
                </div>    
            </div>    
        </div>    
    )
}

export default MarketingResources;