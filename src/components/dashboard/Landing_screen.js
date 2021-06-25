import React,{useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
import axios from 'axios';
import  FormData from 'form-data';
import $ from'jquery';
const LandingScreen = (props) => {
    var camprowId =  props.campid;
    console.log('camprowId',camprowId);
    const [selectedFile, setSelectedFile] = useState();
    const [bgColour, setBgColour] = useState();
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
    // setFileExtParams(() => getFileExtParams(files[0].type));
    };
    const changeBgColor = (e) => {
        setBgColour(e.target.value);
    }
    const changeMessage = (e) => {
        setSelectedmessage(e.target.value);
    }
    const changeMsgColor = (e) => {
        setmessagecolor(e.target.value);
    }

    const saveLandingScreen = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        var logoImage = '';
        // logoImage = document.getElementById("upload_logo").files[0];
        // console.log('logoImage',logoImage);
        // console.log('selectedFile',selectedFile);
        // var formData = {logo: logoImage, 'landing-screen' : {message:message}};
        // var landingscreen = JSON.stringify({message:message,messageColor:messagecolor});
        // formData.append("logoName", selectedFile);
        // formData.append("logo", selectedFile);
        // formData.append("logoExtension", fileExtension);
        // formData.append("backgroundColor", bgColour);
        formData.append("logo", selectedFile[0]);
        // formData.append("landing-screen", landingscreen);
        // formData.append("message", message);
        // formData.append("messageColor", messagecolor);
        // console.log('formData', message);
        // const headers = {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'true',
        //     'Access-Control-Allow-Headers': '*',
        // };    
        // await axios.post(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/landing-screen`, formData, headers ).then(res =>{
        //     console.log('pakages',res);
        //     // setItems(res.data.payload);
        // })
        // .catch(err => {
        //     console.log('errresulkt',err);
        // })
        // axios({
        //     method: 'post',
        //     url: 'https://viddey-backend.herokuapp.com/api/v1/campaigns/'+ camprowId +'/landing-screen',
        //     data: formData,
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`,  
        //         'Content-Type': 'multipart/form-data',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     }
        //   }).then((response) => {
        //     console.log('token', response);
        // })
        // .catch((response) => console.log('responseerror', response));


        // const res = await axios.post('https://viddey-backend.herokuapp.com/api/v1/campaigns/7b82ccab-9ef0-427c-b924-3c22f8511d49/landing-screen', formData, headers);
        //  console.log('asgeededsdes',res);   

        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}/landing-screen`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'true',
                'Access-Control-Allow-Headers': '*',
            },
            body: formData
        });
        const landingScreenresult = await result.json();
        // console.log('landingScreenresult',formData); 
    }
       
    return(
            <fieldset>
                <form method="post">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-7">
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
                                                <input type="file" name="upload_img" id="upload_bgimg" className="upload_bgimg hidefile" />
                                            </div>
                                        </div>
                                        <p className="overlaytext">Overlay</p>
                                        <div className="overlay-option">
                                            <ul>
                                                <li><label><input type="radio" name="overlayColor" value="" />No</label></li>
                                                <li><label><input type="radio" name="overlayColor" value="black" />Black</label></li>
                                                <li><label><input type="radio" name="overlayColor" value="white" />White</label></li>
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
                        <div className="col-md-5">
                            <img src={startscreen} />
                        </div>
                    </div>    
                </div>
                <div className="col-md-7">   
                    <input type="button" name="next-step" onClick={saveLandingScreen} className="next-step btn btn-gradient" value="Save and Continue" ></input>
                </div>
                </form>
            </fieldset>
        )
}
export default  LandingScreen;