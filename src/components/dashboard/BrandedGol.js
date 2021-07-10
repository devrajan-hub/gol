import React,{useState, useEffect} from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
import maskicon from '../../../src/assets/images/mask_icon.svg';
import arrow from '../../assets/images/arrow.svg';
import melodyicon from '../../../src/assets/images/melody_icon.svg';
import linkicon from '../../../src/assets/images/link_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
import liveicon from '../../assets/images/liveicon.svg';
import Sidebar from './Sidebar';

const BrandedGol = (props) =>{
    const history = useHistory();
    console.log('propsuh',props);
    var camprowId =  (props.campid) ? props.campid : props.location.campid;
    var editpage = (props.location.block) ? props.location.block :'';
    var campaigns = (props.location.campaigns) ? props.location.campaigns :'';
    const [brandurl, setBrandurl] = useState();
    const [brandgol, setBrandgol] = useState();
    const handleInput = (e) => {
        setBrandurl(e.target.value);
    }
    console.log('camprowId',camprowId);
    useEffect(() => {
        fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}`, {
                "method": "GET",
                "headers": {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log('response',response);
                setBrandgol(response.payload);
            })
            .catch(err => { console.log(err); 
            });
    }, [camprowId])

    const brandedGol = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        var filterid = `${localStorage.getItem('filterid')}`;
        var sound = `${localStorage.getItem('soundid')}`;
        var soundid = (sound) ? sound : '6';
        formData.append("brandURL", brandurl);
        formData.append("filterId", filterid);
        formData.append("soundId", soundid);
        // console.log('formData',formData);
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
        if(brandedgolresult.payload.id){
            history.push({  
                pathname: "/data-capture",
                campid: camprowId,
                block: '',
               });  
        }
       
    }
    
    const updateBrandedGol = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        var filterid = `${localStorage.getItem('filterid')}`;
        var soundid = `${localStorage.getItem('soundid')}`;
        var sound = `${localStorage.getItem('soundid')}`;
        var soundid = (sound) ? sound : '6';
        formData.append("brandURL", brandurl);
        formData.append("filterId", filterid);
        formData.append("soundId", soundid);
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
        const updategolresult = await result.json();
        console.log('updategolresult',updategolresult);
        if(updategolresult.payload.id){
            history.push({  
                pathname: "/data-capture",
                campid: camprowId,
                block: 'edit',
                datacaptureItem: (campaigns)?campaigns : brandgol
            });  
        }
    }

    return(
        <div className="golcampaim-data">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <ul id="progressbar">
                        <li class="backbutton"><Link to={{pathname:'/custom-landing', campId: camprowId}}><img src={arrow} />Back</Link></li>
                        <li id="step1"><strong>Landing screen</strong></li>
                        <li class="active" id="step2"><strong>Branded GOL</strong></li>
                        <li id="step3"><strong>Data capture</strong></li>
                        <li id="step3"><strong>Publish</strong></li>
                    </ul>
                    <div class="customize-landing">
                        <div class="custom-landing-fields">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="branded-gol">
                                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                                <NavLink to={{pathname:'/add-filter', filterdata: (brandgol != null) ? brandgol.brandedGOL : '' , campid:camprowId }}>
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
                                                <NavLink to={{pathname:'/add-sound', sounddata: (brandgol != null) ? brandgol.brandedGOL : '', campid:camprowId}}>
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
                                                            {/* <input type="text" id="brandurl" className="brandurl" name="brandurl" value={(brandgol != null) ? ((brandgol.brandedGOL != null) ? brandgol.brandedGOL.brandURL : '') : ''}  onChange={handleInput} placeholder="Input your URL" /> */}
                                                            <input type="text" id="brandurl" className="brandurl" name="brandurl"   onChange={handleInput} placeholder="Input your URL" />
                                                            {/* <p>Input your URL</p> */}
                                                        </div>
                                                    </div>
                                                {/* </NavLink>     */}
                                            </div>
                                        </div>
                                        <div className="golbutton">   
                                            <input type="button" name="next-step" onClick={brandedGol} className={((brandgol != null) ? ((brandgol.brandedGOL != null) ? 'hideelement': 'next-step btn btn-gradient') : 'hideelement')} value="Save and Continue" />
                                            <input type="button" name="next-step" onClick={updateBrandedGol} className={((brandgol != null) ? ((brandgol.brandedGOL != null) ? 'next-step btn btn-gradient': 'hideelement') : 'next-step btn btn-gradient')} value="Update and Continue" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="livebg">
                                        <img src={startscreen} />
                                        <div class="livebutton">
                                            <button class="download-btn gradien-transparent-bg"><img src={liveicon} />Live Page</button>
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
        </div>
    )
}
export default BrandedGol;