import React,{useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import maskicon from '../../../src/assets/images/mask_icon.svg';
import arrow from '../../assets/images/arrow.svg';
import melodyicon from '../../../src/assets/images/melody_icon.svg';
import linkicon from '../../../src/assets/images/link_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
const BrandedGol = (props) =>{
    var camprowId =  props.campid;
    const [brandurl, setBrandurl] = useState();
    const handleInput = (e) => {
        setBrandurl(e.target.value);
    }

    const brandedGol = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        var filterid = `${localStorage.getItem('filterid')}`;
        var soundid = `${localStorage.getItem('soundid')}`;
        formData.append("brandURL", brandurl);
        formData.append("filterId", filterid);
        formData.append("soundId", soundid);
        console.log('formData',formData);
        var branddata = JSON.stringify({brandURL:brandurl, filterId:filterid, soundId:soundid});
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/branded-gol`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // body: formData
            body: branddata
        });
        const brandedgolresult = await result.json();
        console.log('brandedgolresult',brandedgolresult);
    }

    return(
        <fieldset>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-7">
                        <div className="branded-gol row">
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                <NavLink to="/add-filter">
                                    <div className="col-md-3 gol-image">
                                        <img src={maskicon} />
                                    </div>
                                    <div className="col-md-7 gol-content pd-right0">
                                        <div className="branded-gol-content">
                                            <h3>Add Filters</h3>
                                            <p>Choose filters/effects from gallery</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 arrow-left">
                                        <img src={arrow} />        
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                <NavLink to="/add-sound">
                                    <div className="col-md-3 gol-image">
                                        <img src={melodyicon} />
                                    </div>
                                    <div className="col-md-7 gol-content pd-right0">
                                        <div className="branded-gol-content">
                                            <h3>Add Sound</h3>
                                            <p>Choose sounds/tunes from gallery or upload</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 arrow-left">
                                        <img src={arrow} />        
                                    </div>
                                </NavLink>    
                            </div>
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                {/* <NavLink to="/add-filter"> */}
                                    <div className="col-md-3 gol-image">
                                        <img src={linkicon} />
                                    </div>
                                    <div className="col-md-9 gol-content pd-left0">
                                        <div className="branded-gol-content">
                                            <h3>Add Brand URL</h3>
                                            <input type="text" id="brandurl" className="brandurl" name="brandurl" value={brandurl} onChange={handleInput} placeholder="Input your URL" />
                                            {/* <p>Input your URL</p> */}
                                        </div>
                                    </div>
                                {/* </NavLink>     */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={startscreen} />
                    </div>
                </div>    
            </div>
            <div className="col-md-7">   
                <input type="button" name="next-step" onClick={brandedGol} className="next-step btn btn-gradient" value="Save and Continue" ></input>
            </div>
        </fieldset>
    )
}
export default BrandedGol;