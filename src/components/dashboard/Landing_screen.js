import React,{useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
import arrow from '../../assets/images/arrow.svg';
import liveicon from '../../assets/images/liveicon.svg';
import axios from 'axios';
// import  FormData from 'form-data';
import $ from'jquery';
const LandingScreen = (props) => {
    var camprowId =  props.campid;
    console.log('camprowId',camprowId);
    const [selectedFile, setSelectedFile] = useState();
    const [FileUrl, setFileUrl] = useState();
    const [bgColour, setBgColour] = useState();
    const [bgImage, setBgImage] = useState();
    const [bgImageUrl, setBgUrl] = useState();
    const [overlay, setOverlay] = useState();
    const [overlaycolor, setOverlayColor] = useState();
    const [message, setSelectedmessage] = useState();
    const [messagecolor, setmessagecolor] = useState();
    // const [selectedFile, setSelectedFile] = useState();
    // const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// };
    // if(selectedFile){
    //     var fileName = selectedFile.name;
    //     var fileExtension = fileName.split('.').pop();
    //     console.log('selectedFile',fileExtension);
    // }
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
    const changeMsgColor = (e) => {
        setmessagecolor(e.target.value);
    }
    // if(bgImage){
        // const { overlaytrue } = 'true';
        // setOverlay(true);
    // }
    
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
        console.log('landingScreenresult',formData); 
    }
       
    return(
            <fieldset>
                {/* <form method="post" enctype="multipart/form-data"> */}
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="upload-doc-block">                                                
                                <h2>1. Upload Logo</h2>
                                <p>Upload your logo in high resolution, preferably using a transparent background file in PNG format</p>
                                <div className="upload-block logoupload">
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
                                                <span className="toggle-view activeblock">Color</span>
                                                <span className="toggle-view">Image</span>
                                            </span>
                                            <NavLink to="/" className="btn btn-toggle"></NavLink>
                                    </label>
                                </div>
                                <div className="image-color-upload">
                                    <div className="getcolor-code">
                                        <h2>Get color code</h2>
                                        <input type="color" id="favcolor" name="backgroundColor" value={bgColour} onChange={changeBgColor} />
                                    </div>
                                    <div className="background-image">
                                        <div class="bg-image uploadbgimage">
                                            <div class="upload">
                                                <img src={uploadicon} />
                                                <p>Drop logo here or upload</p>
                                                <input type="file" name="background_image" id="upload_bgimg" onChange={onBgChange} className="upload_bgimg hidefile" />
                                            </div>
                                        </div>
                                        <p className="overlaytext">Overlay</p>
                                        <div className="overlay-option">
                                            <ul>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} value="" />No</label></li>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} value="black" />Black</label></li>
                                                <li><label><input type="radio" name="overlayColor" onChange={onChangeOverlaycolor} value="white" />White</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-doc-block">                                                
                                <h2>3. Message</h2>
                                <p>Input Landing Screen Message</p>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message" value={message} onChange={changeMessage}></textarea>
                                </div>
                            </div>
                            <div className="upload-doc-block">                                                
                                <h2>4. Message color</h2>
                                <p>Make sure the text is clearly visible against the customized background.</p>
                                <div className="form-group">
                                    <input type="color" id="favcolor1" className="favcolor" name="messageColor" value={messagecolor} onChange={changeMsgColor} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="livebg">
                                <img src={startscreen} />
                                {/* {FileUrl && <ImageThumb image={selectedFile} />} */}
                                <img className="selectedimage" src={FileUrl} />
                                <img className="selectedbgimage" src={bgImageUrl} />
                                <div className={overlaycolor} id="overlaycolor"></div>
                                <div class="livebutton">
                                    <button class="download-btn gradien-transparent-bg"><img src={liveicon} />Live Page</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col-md-7">   
                    <input type="button" name="next-step" onClick={saveLandingScreen} className="next-step btn btn-gradient" value="Save and Continue" ></input>
                </div>
                {/* </form> */}
            </fieldset>
        )
}
export default  LandingScreen;