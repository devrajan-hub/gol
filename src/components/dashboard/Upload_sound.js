import React,{useState} from 'react';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import addicon from '../../../src/assets/images/addicon.svg';
import { NavLink,Link } from 'react-router-dom';
import axios from 'axios';
const Uploadsound = () => {
    const showUpload = () =>{
        document.getElementById('uploadsoud').style.display = 'block';
    }
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
    var indents = [];
    for (var i = 0; i < 1; i++) {
        indents.push(<div className='col-md-3 sound-block' key={i}>
            <div className="s_block">
                <h2>Song name</h2>
                <p>Happy</p>
                <NavLink to='/' className="select-sound">Select</NavLink>
            </div>
        </div>);
    }
    return(
        <div className="mysoundlist">
            <div className="uploadsection">
                <div className="col-md-3">
                    <section className="range-filter">
                        <div className="slider-price d-flex align-items-center" onClick={showUpload}>
                            <p>Upload Sound</p>
                            <span className="showplus">
                                <img src={addicon} />
                            </span>
                        </div>
                    </section>
                </div>
                <div className="col-md-9">
                </div>
            </div>
            <div className="uploadsoud" id="uploadsoud">
                <form method="post" enctype="multipart/form-data">
                <div className="upload-doc">
                    <img src={uploadicon} />
                    <p>Drop logo here or upload</p>
                    <input type="file" name="file" id="upload_sound" onChange={changeHandler} className="upload_sound"></input>
                </div> 
                <NavLink to='/' onClick={uploadSound} className="select-sound">Save and Continue</NavLink> 
                </form>  
            </div>
            <div className="sound-block col-md-12">
                    <div className="row">
                    {/* {items.map(item => (
                        <div className='col-md-3 sound-block' key={i}>
                            <div className="s_block">
                                <h2>Song name</h2>
                                <p>Happy</p>
                                <NavLink to='/' className="select-sound">Select</NavLink>
                            </div>
                        </div>      
                    ))} */}
                        {indents}
                    </div>
                </div>     
        </div>    
    )
}

export default Uploadsound;