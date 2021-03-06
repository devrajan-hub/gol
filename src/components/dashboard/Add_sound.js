import React from 'react';
import { NavLink,Link, useHistory} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import Soundslist from '../dashboard/Soundslist';
import Uploadsound from '../dashboard/Upload_sound';
import closeicon from '../../assets/images/close_icon.svg';


const Addsound = (props) => {
    var camprowId = (props.location.sounddata) ? props.location.sounddata.id : '';
    var soundid = (props.location.sounddata) ? props.location.sounddata.sound.id : '';
    var camprowId = (props.location.campid) ? props.location.campid : camprowId;
    console.log('propsww',camprowId);
    let history = useHistory();
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="section-padding">
                    <div className="heading-sound-block">
                        <h2>Add sound</h2> 
                        <div className="closebtn">
                            {/* <Link to="/" onClick={history.goBack}><img src={closeicon} /></Link> */}
                            <Link to={{pathname:'/branded-gol', campid:camprowId, block:''}}><img src={closeicon} /></Link>
                        </div>
                    </div>
                    <div className="tab-design">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#soundlibrary" role="tab" aria-controls="home" aria-selected="true">Sound Library</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#uploadsound" role="tab" aria-controls="profile" aria-selected="false">My Sounds</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="soundlibrary" role="tabpanel" aria-labelledby="home-tab">
                                <Soundslist state={{soundid:soundid}} />           
                            </div>
                            <div class="tab-pane fade" id="uploadsound" role="tabpanel" aria-labelledby="profile-tab">
                                <Uploadsound />
                            </div>
                        </div>
                    </div>
                </div>    
                </div>    
            </div>    
        </div>    
    )
}
export default Addsound;