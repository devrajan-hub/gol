import React, {useState} from 'react';
import {Navlink,Link, useHistory, Redirect} from 'react-router-dom';
import Sidebar from '../Sidebar';
import addicon from '../../../assets/images/plus_icon.svg';
import closeicon from '../../../assets/images/close_icon.svg';

const AddArticle = () => {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const [selectedInput, setInputField] = useState();
    const [selectedTextArea, setTextareaField] = useState();
    const uploadCover = () =>{
        document.getElementById('articlecover').click();
    }

    const onFileChange = (event) =>{
        const { files } = event.target;
        setSelectedFile(files);
    }

    const handleInput = (event) => {
        setInputField(event.target.value);
    }

    const handleTextArea = (event) => {
        setTextareaField(event.target.value);
    }

    const addArticle = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        var newarticledata = JSON.stringify({text:selectedInput, title:selectedTextArea});
        if(selectedFile){
            formData.append("file", selectedFile[0]);
        }
        formData.append("article", newarticledata);
        const result = await fetch(`https://viddey-backend.herokuapp.com/api/v1/articles`,{
            method : "POST",
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });
        const uploadResult = await result.json();
        if(uploadResult.payload.id){
            history.push('/marketing');
        }else{
            window.alert('Invalid Registration');
        }
        console.log('newarticledata',uploadResult);
    }
     
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="headingblock">
                        <h1>New Article</h1> 
                        <div className="closebtn">
                            <img src={closeicon} />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="new-article">
                        <div className="article-resources">
                            <form method="post" action="">
                                <div className="form-group">
                                    <label for="">1. Upload the cover</label>
                                    <div className="upload-block" onClick={uploadCover}>
                                        <div className="upload">
                                            <img src={addicon} />
                                            <p>Drop picture here or upload</p>
                                            <input type="file" id="articlecover" name="articlecover" className="custom-file-input upload_logo" onChange={onFileChange} custom={true} />
                                        </div>
                                    </div>
                                    {/* <input type="text" className="form-control" id="" placeholder="Company Name"></input> */}
                                </div>
                                <div className="form-group">
                                    <label for="">2. Title</label>
                                    <input type="text" className="form-control" id="" placeholder="Title" onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label for="">3. Text</label>
                                    <textarea name="txtmessage" className="form-control" rows="15" cols="3" type="text"  onChange={handleTextArea} placeholder="Text"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-gradient" onClick={addArticle}>Save and Publish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddArticle;