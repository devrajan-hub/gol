import React,{useState} from 'react';
import { NavLink,Link, useHistory } from 'react-router-dom';
import qrcode from '../../assets/images/qrcode.png';
const PublishUrl = (props) =>{
    var camprowId =  props.campid;
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
    // console.log('selectedUrl',itemUrl);
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
        if(campaignresult.id){
            history.push('/camp-setting');
        }else{
            window.alert('Invalid Registration');
        }
    }
    return(
        <fieldset>
            <div className="urlblock row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className="add_url">        
                        <h2>Generate URL</h2>
                        <h4>This is the URL where user will create a GOL</h4>
                        <div className={(itemUrl == '1') ? 'hideelement' :'generate-url'}>
                            <p>Part of shareable URL</p>
                            <div className="form-group">
                                <input type="text" name="url" className="form-control" id="" onChange={handleUrlInput} placeholder="your part .viddey.video" />
                            </div>
                            <button type="button" className="btn btn-primary btn-gradient" onClick={generateUrl}>Generate</button>
                        </div>
                        <div className={(itemUrl == '1') ? 'show-url' :'hideelement'}>
                            <div className="url-block">
                                <img src={qrcode} />
                                <NavLink to="/www.remy.gifsoutloud.com">www.remy.gifsoutloud.com</NavLink>
                            </div>    
                            <button type="button" className="btn btn-primary btn-gradient" onClick={saveCampaignSetting}>Save and Complete</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                </div>    
            </div>    
        </fieldset>
    )
}
export default PublishUrl;