import React, {useState} from 'react';
import {Navlink,Link, useHistory, Redirect} from 'react-router-dom';
import Sidebar from '../Sidebar';
import addicon from '../../../assets/images/plus_icon.svg';
import closeicon from '../../../assets/images/close_icon.svg';

const AddSound = () => {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const [selectedName, setSelectedName] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedType, setSelectedtype] = useState();
    const uploadsound = () => {
        document.getElementById('soundfile').click();
    }
    const onFileChange = (event) => {
        const { files } = event.target;
        setSelectedFile(files);
    }

    const handleInputName = (event) => {
        setSelectedName(event.target.value);
    }

    const handleInputcategory = (event) => {
        setSelectedCategory(event.target.value);
    }

    const selectMelowHype = (event) => {
        setSelectedtype(event.target.value);
    }   

    const addNewSong = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        var sounddata = JSON.stringify({name:selectedName, category:selectedCategory, mellowToHype:selectedType});
        if(selectedFile){
            formData.append("file", selectedFile[0]);
        }
        formData.append("sound", sounddata);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/sounds/admin`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });
        const uploadResult = await result.json();
        if(uploadResult.payload.id){
            history.push('/songs-library');
        }else{
            window.alert('Invalid Registration');
        }    
        console.log('uploadSoundResult',uploadResult);
    }
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="headingblock">
                        <h1>Add a song</h1> 
                        <div className="closebtn">
                            <img src={closeicon} />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="new-article">
                        <div className="article-resources new-songs">
                            <form method="post" action="" enctype="multipart/form-data">
                                <div className="form-group">
                                    <label for="">1. Upload the file</label>
                                    <div className="upload-block" onClick={uploadsound}>
                                        <div className="upload">
                                            <img src={addicon} />
                                            <p>Drop sound file here or upload</p>
                                            <input type="file" id="soundfile" name="soundfile" className="custom-file-input upload_logo" onChange={onFileChange} custom={true} />
                                        </div>
                                    </div>
                                    {/* <input type="text" className="form-control" id="" placeholder="Company Name"></input> */}
                                </div>
                                <div className="form-group">
                                    <label for="">2. Song name</label>
                                    <input type="text" className="form-control" id="" placeholder="Song name" onChange={handleInputName} />
                                </div>
                                <div className="form-group">
                                    <label for="">3. Choose category</label>
                                    <select class="form-select form-control selectcategory" aria-label="Default select example" onChange={handleInputcategory}>
                                        <option selected>Choose Category</option>
                                        <option value="HAPPY">Happy</option>
                                        <option value="SAD">Sad</option>
                                    </select>
                                </div>
                                <div className="form-group melow-section">
                                    <label for="">4. Melow or Hype</label>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="1" onChange={selectMelowHype} id="hype" />
                                        <label class="custom-control-label" for="hype">1</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="2" onChange={selectMelowHype} id="hype2" />
                                        <label class="custom-control-label" for="hype2">2</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="3" onChange={selectMelowHype} id="hype3" />
                                        <label class="custom-control-label" for="hype3">3</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="4" onChange={selectMelowHype} id="hype4" />
                                        <label class="custom-control-label" for="hype4">4</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="5" onChange={selectMelowHype} id="hype5" />
                                        <label class="custom-control-label" for="hype5">5</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault"  value="6" onChange={selectMelowHype} id="hype6" />
                                        <label class="custom-control-label" for="hype6">6</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="7" onChange={selectMelowHype} id="hype7" />
                                        <label class="custom-control-label" for="hype7">7</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="8" onChange={selectMelowHype} id="hype8" />
                                        <label class="custom-control-label" for="hype8">8</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="9" onChange={selectMelowHype} id="hype9" />
                                        <label class="custom-control-label" for="hype9">9</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" value="10" onChange={selectMelowHype} id="hype10" />
                                        <label class="custom-control-label" for="hype10">10</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-gradient" onClick={addNewSong}>Save and Publish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSound;