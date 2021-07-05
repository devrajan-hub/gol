import React, {useEffect, useState} from 'react';
import downloadimg from '../../assets/images/download_icon.svg'
import Sidebar from '../dashboard/Sidebar';
import phoneicon from '../../assets/images/phone_icon.svg';
import envelopeicon from '../../assets/images/envelope_icon.svg';
import defaultimg from '../../assets/images/pic_icon.svg';
import notavailable from '../../assets/images/not-available.svg';

const CrmDatabase = () =>{
    const [packageName, setIPackageName] = useState();
    useEffect(() => {
        fetch('https://viddey-backend.herokuapp.com/api/v1/tickets', {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(response => response.json())
        .then(response => {
            // console.log('response',response);
            setIPackageName(response.payload.packageType);
        })
        .catch(err => { console.log(err); 
        });
    })
    var indents = [];
    for (var i = 0; i < 12; i++) {
        indents.push(<tr>
            <th scope="row"><img src={envelopeicon} />user.email.example@gmail.com</th>
            <td>Remy Martin</td>
            <td><img src={defaultimg} /></td>
        </tr>);
    }
    return(
        <div className="crmdatabase-lists">
            <div className={(packageName == 'PRO') ? 'col-md-12' :'hideelement'}>
                <div className="row">
                    <div className="download-file">
                        <button className="download-btn gradien-transparent-bg"><img src={downloadimg} />Download .xlsx</button>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className={(packageName == 'PRO') ? 'row database-list' :'hideelement'}>
                    <table class="table">
                        <thead class="database-thead">
                            <tr>
                                <th scope="col">EMAIL / PHONE</th>
                                <th scope="col">CAMPAIGN</th>
                                <th scope="col">GOLs</th>
                            </tr>
                        </thead>
                        <tbody>{indents}</tbody>
                    </table>
                </div>
                <div className={(packageName != 'PRO') ? 'available-plan' :'hideelement'}>    
                    <img src={notavailable} />
                    <p>This section is not available for your plan</p>
                    <a href="/" className="btn btn-primary btn-gradient btn-getplan">Upgrade</a>
                </div>    
            </div>    
        </div>    
    )
}

export default CrmDatabase;