import React,{useState} from 'react';
import {Navlink,Link, useHistory, Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
const Compaign = () => {
    const history = useHistory();
    const[campaign,setUser] = useState({
        name:""
    });
    let name, value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...campaign, [name]:value});
    }

    const createCampaign = async(e) =>{
        e.preventDefault();
        const{name} = campaign;
        console.log('campname',name);
        const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/campaigns',{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'true',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify({
                name
            })
        });
        const camdata = await result.json();
        if(camdata.id){
            history.push('/camp-setting');
        }else{
            window.alert('Invalid Registration');
        }
    }

    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="col-md-12 newcampaign">
                        <div className="golcontent text-center">
                                <h2>Create campaign</h2>
                                <form method="post" action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="" name="name" placeholder="Campaign name" value={campaign.name} onChange={handleInputs} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-gradient" onClick={createCampaign}>Continue</button>
                                </form>
                        </div>
                    </div>        
                </div>    
             </div>  
        </div>  
    )
}

export default Compaign;