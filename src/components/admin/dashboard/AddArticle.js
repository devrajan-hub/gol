import React from 'react';
import Sidebar from '../Sidebar';
import addicon from '../../../assets/images/plus_icon.svg';
import closeicon from '../../../assets/images/close_icon.svg';

const AddArticle = () => {
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
                                    <div className="upload-block">
                                        <div className="upload">
                                            <img src={addicon} />
                                            <p>Drop picture here or upload</p>
                                        </div>
                                    </div>
                                    {/* <input type="text" className="form-control" id="" placeholder="Company Name"></input> */}
                                </div>
                                <div className="form-group">
                                    <label for="">2. Title</label>
                                    <input type="text" className="form-control" id="" placeholder="Title"></input>
                                </div>
                                <div className="form-group">
                                    <label for="">3. Text</label>
                                    <textarea name="txtmessage" className="form-control" rows="15" cols="3" type="text" placeholder="Text"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-gradient">Save and Publish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddArticle;