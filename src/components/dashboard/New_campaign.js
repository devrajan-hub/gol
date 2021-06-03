import React,{useState} from 'react';
import Sidebar from './Sidebar';
const Compaign = () => {
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
        const result = await fetch('https://viddey-backend.herokuapp.com/api/v1/campaigns',{
            method : "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });
        const userdata = await result.json();
        console.log('campname', userdata);
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