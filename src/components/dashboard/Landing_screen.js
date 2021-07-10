import React,{useState, useEffect} from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
import arrow from '../../assets/images/arrow.svg';
import liveicon from '../../assets/images/liveicon.svg';
import { SketchPicker } from 'react-color';
import axios from 'axios';
// import  FormData from 'form-data';
import $ from'jquery';
const LandingScreen = (props) => {
    console.log('propslanding',props);
    var camprowId =  props.state.campid;
    var editpage =  (props.state.editdata) ? props.state.editdata :'';
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const [FileUrl, setFileUrl] = useState();
    const [bgColour, setBgColour] = useState();
    const [bgImage, setBgImage] = useState();
    const [bgImageUrl, setBgUrl] = useState();
    const [overlay, setOverlay] = useState();
    const [overlaycolor, setOverlayColor] = useState();
    const [message, setSelectedmessage] = useState();
    const [messagecolor, setmessagecolor] = useState();
    const [selectTab, setSelectedTab] = useState('0');
    const [landingItems, setLandingItems] = useState([]);
    // const [selectedFile, setSelectedFile] = useState();
    // const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// };
    // if(selectedFile){
    //     var fileName = selectedFile.name;
    //     var fileExtension = fileName.split('.').pop();
    //     console.log('selectedFile',fileExtension);
    // }
    const uploadLogo = () => {
        document.getElementById('fileDocument').click();
    }
    const uploadBackground = () => {
        document.getElementById('upload_bgimg').click();
    }
    
    const tabChange = (e) => {
        console.log('asdfgsdgsd',e.target.dataset.value);
        setSelectedTab(e.target.dataset.value);
    }

    const handleChangeComplete = (color, event) => {
        setBgColour(color.hex);
      };
    // console.log('bgColour',bgColour);  
    const onFileChange = (event) => {
        const { files } = event.target;
        setSelectedFile(files);
        setFileUrl(URL.createObjectURL(event.target.files[0]));
    // setFileExtParams(() => getFileExtParams(files[0].type));
    };
    const changeBgColor = (e) => {
        setBgColour(e.target.value);
    }
    const onBgChange = (e) => {
        const { files } = e.target;
        setBgImage(files);
        setBgUrl(URL.createObjectURL(e.target.files[0]));
    }
    const onChangeOverlaycolor = (e) => {
        setOverlayColor(e.target.value);
    }
    const changeMessage = (e) => {
        setSelectedmessage(e.target.value);
    }
    const changeMsgColor = (color, event) => {
        setmessagecolor(color.hex);
    }
    // console.log('messagecolor',messagecolor);
    // if(bgImage){
        // const { overlaytrue } = 'true';
        // setOverlay(true);
    // }
    // console.log('selectTab',selectTab);

    useEffect(() => {
        fetch(`https://viddey-backend.herokuapp.com/api/v1/landing-screens/${camprowId}`, {
                "method": "GET",
                "headers": {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                // console.log('response',response);
                if(response.payload.backgroundImageURL != null){
                    setSelectedTab(1);
                }
                editpage = 'edit';
                setLandingItems(response.payload);
            })
            .catch(err => { console.log(err); 
            });
    }, [camprowId])

    console.log('landingItems',landingItems);

    const saveLandingScreen = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        var landingscreen = JSON.stringify({message:message, messageColor:{hex:messagecolor}, backgroundColor:{hex:bgColour}, overlayColor:{hex:overlaycolor}});
        if(selectedFile){
            formData.append("logo", selectedFile[0]);
        }
        if(bgImage){
            formData.append("background-image", bgImage[0]);
        }
        // // formData.append("backgroundColor", bgColour);
        formData.append("landing-screen", landingscreen);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/landing-screen`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });
        const landingScreenresult = await result.json();
        if(landingScreenresult.id){
            history.push({  
                pathname: "/branded-gol",
                campid: camprowId,
                block: '',
            });  
        }
    }
    const updateLandingScreen = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        var landingscreen = JSON.stringify({message:message, messageColor:{hex:messagecolor}, backgroundColor:{hex:bgColour}, overlayColor:{hex:overlaycolor}});
        if(selectedFile){
            formData.append("logo", selectedFile[0]);
        }
        if(bgImage){
            formData.append("background-image", bgImage[0]);
        }
        // // formData.append("backgroundColor", bgColour);
        formData.append("landing-screen", landingscreen);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/landing-screen`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });
        const landingScreenupdate = await result.json();
        console.log('landingScreenupdate',landingScreenupdate);
        if(landingScreenupdate.id){
            history.push({  
                pathname: "/branded-gol",
                campid: camprowId,
                block: 'edit',
            });  
        }
    }
    
    console.log('landingbgColour',bgColour); 
    return(
            <div className="golcampaim-data">
             {/* <fieldset> */}
                {/* <form method="post" enctype="multipart/form-data"> */}
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="upload-doc-block">                                                
                                <h2>1. Upload Logo</h2>
                                <p>Upload your logo in high resolution, preferably using a transparent background file in PNG format</p>
                                <div className="upload-block logoupload" onClick={uploadLogo}>
                                    <div className="upload">
                                        <img src={uploadicon} />
                                        <p>Drop logo here or upload</p>
                                        <input type="file"
                                            id="fileDocument"
                                            name="fileDocument"
                                            className="custom-file-input upload_logo"
                                            // disabled={isUploading}
                                            onChange={onFileChange}
                                            custom={true} />
                                        {/* <input type="file" name="logoName" id="upload_logo" onChange={changeHandler} className="upload_logo hidefile" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="upload-doc-block">                                                
                                <h2>2. Background</h2>
                                <p>Make sure the logo and text are clearly visible against the customized background.</p>
                                <div className="bg-switch">
                                    <label className="bg-switch-light">
                                    <input type="checkbox"></input>
                                            <span>
                                                <span className={(selectTab == 1) ? 'toggle-view' :'toggle-view activeblock'} data-value="0" onClick={tabChange}>Color</span>
                                                <span className={(selectTab == 1) ? 'toggle-view activeblock' :'toggle-view'} data-value="1" onClick={tabChange}>Image</span>
                                            </span>
                                            <NavLink to="/" className="btn btn-toggle"></NavLink>
                                    </label>
                                </div>
                                <div className="image-color-upload">
                                    <div className={(selectTab == 0) ? 'getcolor-code' :'hideelement'}>
                                        <h2>Get color code</h2>
                                        <SketchPicker onChangeComplete={ handleChangeComplete } />
                                        {/* <input type="color" id="favcolor" name="backgroundColor" value={bgColour} onChange={changeBgColor} /> */}
                                    </div>
                                    <div className={(selectTab == 1) ? 'background-image' :'hideelement'}>
                                        <div class="bg-image uploadbgimage" onClick={uploadBackground}>
                                            <div class="upload">
                                                <img src={uploadicon} />
                                                <p>Drop logo here or upload</p>
                                                <input type="file" name="background_image" id="upload_bgimg" onChange={onBgChange} className="upload_bgimg hidefile" />
                                            </div>
                                        </div>
                                        <p className="overlaytext">Overlay</p>
                                        <div className="overlay-option">
                                            <ul>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} data-value="" value="" />No</label></li>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} data-value="black" value="black" />Black</label></li>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} data-value="white" value="white" />White</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-doc-block">                                                
                                <h2>3. Message</h2>
                                <p>Input Landing Screen Message</p>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message"  onChange={changeMessage}>{(landingItems != null) ? landingItems.message :'srtr'}</textarea>
                                </div>
                            </div>
                            <div className="upload-doc-block">                                                
                                <h2>4. Message color</h2>
                                <p>Make sure the text is clearly visible against the customized background.</p>
                                <div className="form-group">
                                    <SketchPicker onChangeComplete={ changeMsgColor } />
                                    {/* <input type="color" id="favcolor1" className="favcolor" name="messageColor" value={messagecolor} onChange={changeMsgColor} /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="livebg">
                                <img src={startscreen} />
                                {/* {FileUrl && <ImageThumb image={selectedFile} />} */}
                                <img className="selectedimage" src={(FileUrl) ? FileUrl : (landingItems != null) ? landingItems.logoURL : ''} />
                                <img className="selectedbgimage" src={(bgImageUrl)?bgImageUrl: (landingItems != null) ? landingItems.backgroundImageURL : ''} />
                                <div className={(overlaycolor)?overlaycolor: (landingItems != null) ? landingItems.overlayColor : ''} id="overlaycolor"></div>
                                <div class="livebutton">
                                    <button class="download-btn gradien-transparent-bg"><img src={liveicon} />Live Page</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col-md-8">   
                    <input type="button" name="next-step" onClick={saveLandingScreen} className={(landingItems != '') ? 'hideelement':'next-step btn btn-gradient'} value="Save and Continue" ></input>
                    <input type="button" name="next-step"  onClick={updateLandingScreen} className={(landingItems != '') ? 'next-step btn btn-gradient':'hideelement'} value="Update and Continue" ></input>
                </div>
                {/* </form> */}
         {/* </fieldset> */}
            </div>
        )
}
export default  LandingScreen;