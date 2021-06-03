import React from 'react';
import {Navlink,Link} from 'react-router-dom';
import profilepic from '../../assets/images/blank-profile-picture.png';

const Golgallery = () => {
    var indents = [];
    for (var i = 0; i < 12; i++) {
        indents.push(<div className='col-md-2 campaign-block' key={i}>
            <div className="gol_block">
                <img src={profilepic} />
                <h4>Remy Martin</h4>
            </div>
        </div>);
    }
    return(
        <div className="col-md-12 gallery-content">
            <div className="">
                <div className="golcontent text-center">
                    <h2>Welcome!</h2>
                    <p>You have no active campaigns. Create your campaign now</p>
                    {/* <button type="submit" className="btn btn-primary btn-gradient btn-getplan">Create campaign</button> */}
                    <Link to="/campaign" className="btn btn-primary btn-gradient btn-getplan">Create campaign</Link>
                </div>    
            </div>
            <div className="gols-campaign row">    
                <div className="col-md-9 gol-heading">
                    <h3>All of the GOLS captured from all campaigns</h3>
                </div>
                <div className="col-md-3">
                    <section className="range-filter">
                        <div className="slider-price d-flex align-items-center">
                            <span className="small range-name mr-2">-</span>
                            <input type="range" className="form-range" id="slider"></input>
                            <span className="small range-name ml-2">+</span>
                        </div>
                    </section>
                </div>    
            </div>
            <div className="gol-capm-gallery">
                <div className="row ">{indents}</div>       
            </div>    
        </div>    
    )
}
export default  Golgallery;