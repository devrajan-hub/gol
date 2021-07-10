import React, {useState, useEffect} from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
import startscreen from '../../assets/images/start_screen.png';
import addicon from '../../assets/images/addicon.svg';
import arrow from '../../assets/images/arrow.svg';
import liveicon from '../../assets/images/liveicon.svg';
import Sidebar from './Sidebar';


const DataCapture = (props) => {
    const history = useHistory();
    console.log('props',props);
    var camprowId =  (props.campid) ? props.campid : props.location.campid;
    var editpage = (props.location.block) ? props.location.block :'';
    var campaignItems = (props.location.datacaptureItem) ? props.location.datacaptureItem :'';
    var datacaptureItem = (props.location.datacaptureItem) ? props.location.datacaptureItem.dataCapture :'';
    const [dataCaptureInput, setDataCaptureInput] = useState();
    const [promoMsg, setPromoeMsg] = useState();
    const [dataCapture, selectdataCapture] = useState();
    const [dataCaptureitem, setsdataCaptureItem] = useState();
    const state = {captur : []}
    const changeDataCapture = (event) => {
        if(event.target.checked){
            setDataCaptureInput(1);
         } else {
            setDataCaptureInput(0);
         }
    }

    const handlemessage = (e) =>{
        setPromoeMsg(e.target.value);
    }
    var capdata = [];            
    const handleCapture = (e) => {
        //  value = e.target.value;
        if(e.target.checked){
            // state.captur.push(e.target.value);   
            capdata.push(e.target.value);   
        }else{
            // state.captur.splice(e.target.value, 1);
        }
        // selectdataCapture(e.target.value);        
    }
    var  CaptureIsOn = (datacaptureItem) ? datacaptureItem.dataCaptureIsOn == true :'';
    if( CaptureIsOn ){
        // document.getElementById("datacapture").checked = true;
    }
    // useEffect(() => {
    //     fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}`, {
    //             "method": "GET",
    //             "headers": {
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log('response',response);
    //             setsdataCaptureItem(response.payload);
    //             if(response.payload.dataCapture.data != ''){
    //                 setDataCaptureInput(1);
    //                 document.getElementById("datacapture").checked = true;
    //             }
    //         })
    //         .catch(err => { console.log(err); 
    //         });
    // }, [camprowId])

    console.log('dataCaptureitem',datacaptureItem);

    const saveDataCapture = async() =>{
        var datacapture = JSON.stringify({dataCaptureIsOn:dataCaptureInput, message:promoMsg, data:capdata});
        console.log('datacapture', datacapture);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/data-capture`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // body: formData
            body: datacapture
        });
        const brandedgolresult = await result.json();
        if(brandedgolresult.payload.id){
            history.push({  
            pathname: "/publish-url",
            campid: camprowId,
            block: '',
           });  
        }   
    }

    const updateDataCapture = async() =>{
        var datacapture = JSON.stringify({dataCaptureIsOn:dataCaptureInput, message:promoMsg, data:capdata});
        console.log('datacapture', datacapture);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/data-capture`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // body: formData
            body: datacapture
        });
        const brandedgolresult = await result.json();
        console.log('brandedgolresult',brandedgolresult);
        if(brandedgolresult.payload.id){
            history.push({  
            pathname: "/publish-url",
            campid: camprowId,
            block: 'edit',
            campaign : campaignItems
           });  
        }
    }
    
    // console.log('dataCapture',dataCapture);
    return(
        <div className="golcampaim-data">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <ul id="progressbar">
                        <li class="backbutton"><Link to={{pathname:'/branded-gol', campid: camprowId}}><img src={arrow} />Back</Link></li>
                        <li  id="step1"><strong>Landing screen</strong></li>
                        <li id="step2"><strong>Branded GOL</strong></li>
                        <li class="active" id="step3"><strong>Data capture</strong></li>
                        <li id="step3"><strong>Publish</strong></li>
                    </ul>
                    <div class="customize-landing">
                        <div class="custom-landing-fields">
                        <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="check-datacapture">
                                            <div className="check-capture data-capture-block">
                                                <h2>Data capture</h2>
                                                <div className="dash-detail">
                                                    <label class="switch">
                                                        <input type="checkbox" name="datacapture" id="datacapture" onChange={changeDataCapture} value="0" />
                                                        <span class="slider round"></span>
                                                    </label>                 
                                                </div>
                                            </div>
                                            <div class={(dataCaptureInput == 1 || ((datacaptureItem) ? datacaptureItem.dataCaptureIsOn == true :'')) ? 'skipbtn hideelement' : 'skipbtn'}>
                                                <button type="button" name="next-step" className="next-step btn btn-gradient" >Skip</button>    
                                            </div>    
                                        </div>    
                                        <div className={(dataCaptureInput == 1 || ((datacaptureItem) ? datacaptureItem.dataCaptureIsOn == true :'')) ? 'data-capture' : 'data-capture hideelement'}>
                                            <div className="data-capture-block">
                                                <h2>1. Promo</h2>
                                                <p>Input your promo message</p>
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" onChange={handlemessage} placeholder="Message">{(datacaptureItem.message != null) ? datacaptureItem.message :''}</textarea>
                                                </div>
                                            </div>
                                            <div className="data-capture-block">
                                                <h2>2. Data capture</h2>
                                                <p className="promo-capture">Select the points you want to ask the user</p>
                                                <div id="data-capture-list">
                                                    <label class="checkbox-container" for="email">Email
                                                        <input type="checkbox" id="email" value="email"  onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-container" for="first-name">First name
                                                        <input type="checkbox" id="first-name" value="firstname" onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-container" for="last-name">Last name
                                                        <input type="checkbox" id="last-name" value="lastname" onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-container" for="dob">Date of birth
                                                        <input type="checkbox" id="dob" value="dob" onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-container" for="phoneno">Phone number
                                                        <input type="checkbox" id="phoneno" value="phone" onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="checkbox-container" for="postalcode">Postal code
                                                        <input type="checkbox" id="postalcode" value="postalcode" onChange={handleCapture} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="addques">
                                                    <img src={addicon} />
                                                    <span className="add-data-capture">Add your question</span>
                                                </div>    
                                            </div>
                                            {/* <div className={(dataCaptureInput == 1) ? 'col-md-12 datcapturebutton' : 'col-md-12 hideelement'}>    */}
                                                <input type="button" name="next-step" className={(editpage == 'edit') ? 'hideelement':'next-step btn btn-gradient'} onClick={saveDataCapture} value="Save and Continue" />
                                                <input type="button" name="next-step" className={(editpage == 'edit') ? 'next-step btn btn-gradient':'hideelement'} onClick={updateDataCapture} value="Update and Continue" />
                                            {/* </div>  */}
                                        </div>
                                    </div>
                                    <div className="col-md-5">
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
export default DataCapture;