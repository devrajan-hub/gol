import React,{useState} from 'react';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import { NavLink,Link } from 'react-router-dom';
import axios from 'axios';
const Uploadsound = () => {
    const [selectedFile, setSelectedFile] = useState();
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
    const uploadSound = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        axios({
            method: 'post',
            url: 'https://viddey-backend.herokuapp.com/api/v1/sounds',
            data: formData,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,  
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
          }).then((response) => {
            console.log('token', response);
        })
        .catch((response) => console.log('error', response));
    }
    return(
        <div className="uploadsoud">
            <form method="post" enctype="multipart/form-data">
            <div className="upload-doc">
                <img src={uploadicon} />
                <p>Drop logo here or upload</p>
                <input type="file" name="file" id="upload_sound" onChange={changeHandler} className="upload_sound"></input>
            </div> 
            <NavLink to='/' onClick={uploadSound} className="select-sound">Save and Continue</NavLink> 
            </form>  
        </div>    
    )
}

export default Uploadsound;