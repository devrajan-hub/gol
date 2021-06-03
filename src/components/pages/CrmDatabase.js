import React from 'react';
import downloadimg from '../../assets/images/download_icon.svg'
import Sidebar from '../dashboard/Sidebar';
import phoneicon from '../../assets/images/phone_icon.svg';
import envelopeicon from '../../assets/images/envelope_icon.svg';
import defaultimg from '../../assets/images/pic_icon.svg';
import notavailable from '../../assets/images/not-available.svg';

const CrmDatabase = () =>{
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
            <div className="col-md-12">
                <div className="row">
                    <div className="download-file">
                        <button className="download-btn gradien-transparent-bg"><img src={downloadimg} />Download .xlsx</button>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row database-list">
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
                <div className="available-plan">    
                    <img src={notavailable} />
                    <p>This section is not available for your plan</p>
                    <a href="/" className="btn btn-primary btn-gradient btn-getplan">Upgrade</a>
                </div>    
            </div>    
        </div>    
    )
}

export default CrmDatabase;