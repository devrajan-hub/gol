import React from 'react';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import { NavLink,Link } from 'react-router-dom';
const Uploadsound = () => {
    return(
        <div className="uploadsoud">
            <div className="upload-doc">
                <img src={uploadicon} />
                <p>Drop logo here or upload</p>
                <input type="file" name="upload_sound" id="upload_sound" className="upload_sound"></input>
            </div> 
            <NavLink to='/' className="select-sound">Save and Continue</NavLink>   
        </div>    
    )
}

export default Uploadsound;