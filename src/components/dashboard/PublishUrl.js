import React,{useState} from 'react';
import { NavLink,Link, useHistory } from 'react-router-dom';
import qrcode from '../../assets/images/qrcode.png';
import arrow from '../../assets/images/arrow.svg';
import Sidebar from './Sidebar';

const PublishUrl = (props) =>{
    var camprowId =  (props.campid) ? props.campid : props.location.campid;
    var editpage = (props.location.block) ? props.location.block :'';
    var campaigndata = (props.location.campaign) ? props.location.campaign :'';
    const history = useHistory();
    const [itemUrl, setUrl] = useState('0');
    const[selectedUrl, setSelectedUrl] = useState();

    const handleUrlInput = (e) => {
        setSelectedUrl(e.target.value);
    }
    const generateUrl = async() =>{
        var generateurl = JSON.stringify({name:selectedUrl});
         const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/generate-url`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: generateurl
        });
        const generateUrldata = await result.json();
        if(generateUrldata){
            setUrl(1);
        }
        // console.log('generateUrldata',generateUrldata);
    }
    console.log('campaigndata',campaigndata);
    const saveCampaignSetting = async() => {
        const campaignsetting = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/publish/${camprowId}`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: ''
        });
        const campaignresult = await campaignsetting.json();
        console.log('campaignresult',campaignresult);
        if(campaignresult == true){
            history.push({  
                pathname: "/camp-setting",
                data: camprowId,
               }); 
        }else{
            window.alert('Invalid Registration');
        }
    }

    const updateGenerateUrl = async() =>{
        var generateurl = JSON.stringify({name:selectedUrl});
         const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/generate-url`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: generateurl
        });
        const generateUrldata = await result.json();
        if(generateUrldata){
            setUrl(1);
        }
    }
 
    const updateCampaignSetting = async() => {
        const campaignsetting = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/publish/${camprowId}`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: ''
        });
        const updatecampaignresult = await campaignsetting.json();
        console.log('campaignresult',updatecampaignresult);
        if(updatecampaignresult == true){
            // history.push('/camp-setting');
            history.push({  
                pathname: "/camp-setting",
                data: camprowId,
               }); 
        }else{
            // window.alert('Invalid Registration');
        }
    }


    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <ul id="progressbar">
                        <li class="backbutton"><Link to={{pathname:'/data-capture', campid: camprowId}}><img src={arrow} />Back</Link></li>
                        <li  id="step1"><strong>Landing screen</strong></li>
                        <li id="step2"><strong>Branded GOL</strong></li>
                        <li id="step3"><strong>Data capture</strong></li>
                        <li class="active" id="step3"><strong>Publish</strong></li>
                    </ul>
                    <div class="customize-landing">
                        <div class="custom-landing-fields">
                            <div className="urlblock row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-6">
                                    <div className="add_url">        
                                        <h2>Generate URL</h2>
                                        <h4>This is the URL where user will create a GOL</h4>
                                        <div className={(itemUrl == '1') ? 'hideelement' :'generate-url'}>
                                            <p>Part of shareable URL</p>
                                            <div className="form-group grurl">
                                                <input type="text" name="url" className="form-control" id=""  onChange={handleUrlInput} placeholder="your part" /><p>.viddey.video</p>
                                            </div>
                                            <button type="button" className={(editpage == 'edit') ? "hideelement" : "btn btn-primary btn-gradient"} onClick={generateUrl}>Generate</button>
                                            <button type="button" className={(editpage == 'edit') ? "btn btn-primary btn-gradient" : "hideelement"} onClick={updateGenerateUrl}>Generate</button>
                                        </div>
                                        <div className={(itemUrl == '1') ? 'show-url' :'hideelement'}>
                                            <div className="url-block">
                                                <img src={qrcode} />
                                                <NavLink to="/www.remy.gifsoutloud.com">www.remy.gifsoutloud.com</NavLink>
                                            </div>    
                                            <button type="button" className={(editpage == 'edit') ? 'hideelement':'btn btn-primary btn-gradient'} onClick={saveCampaignSetting}>Save and Complete</button>
                                            <button type="button" className={(editpage == 'edit') ? 'btn btn-primary btn-gradient':'hideelement'} onClick={updateCampaignSetting}>Update and Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                </div>    
                            </div>    
                        </div>    
                    </div>    
                </div>    
            </div>    
        </div>    
    )
}
export default PublishUrl;