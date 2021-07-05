import React, {useEffect, useState} from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import defaultimage from '../../assets/images/default-image.jpg';
import arrow from '../../assets/images/arrow.svg';
import dateFormat from 'dateformat';

const SingleMarketing = (props) => {
    const [item, setArticleItem] = useState('');
    const articleId = props.location.state.articleid.id;
    useEffect(() => {
        fetch('https://viddey-backend.herokuapp.com/api/v1/articles/'+articleId, {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            // console.log('marketingresponse',response);
            setArticleItem(response.payload);
        })
        .catch(err => { console.log(err); 
        });
    });
    // console.log('articleId',articleId);
    return(
        <div className="col-md-12">
        <div className="row">
            <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container">
                    <div className="col-md-12">
                        <div className="backtopage">
                            <Link to="/marketing-resources"><img src={arrow} />Back</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="single-marketing">
                            <div className="marketing-img">
                                <img src={(item.coverImageURL) ? item.coverImageURL : defaultimage} />
                            </div>
                            <div className="postdate">
                                <span>{dateFormat(item.createdOn, "d.m.yyyy")}</span>
                            </div>    
                            <div className="marketing-title">
                                <h2>{item.text}</h2>
                            </div>
                            <div className="marketing-content">
                                <p>{item.title}</p>
                            </div>    
                        </div>    
                    </div>    
                </div>    
            </div>    
        </div>    
    </div>    
    )
}

export default SingleMarketing;