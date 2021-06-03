import React from 'react';
import Sidebar from '../Sidebar';
import addicon from '../../../assets/images/plus_icon.svg';
import closeicon from '../../../assets/images/close_icon.svg';

const AddSound = () => {
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
                            <form method="post" action="">
                                <div className="form-group">
                                    <label for="">1. Upload the file</label>
                                    <div className="upload-block">
                                        <div className="upload">
                                            <img src={addicon} />
                                            <p>Drop sound file here or upload</p>
                                        </div>
                                    </div>
                                    {/* <input type="text" className="form-control" id="" placeholder="Company Name"></input> */}
                                </div>
                                <div className="form-group">
                                    <label for="">2. Song name</label>
                                    <input type="text" className="form-control" id="" placeholder="Song name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="">3. Choose category</label>
                                    <select class="form-select form-control selectcategory" aria-label="Default select example">
                                        <option selected>Choose Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="form-group melow-section">
                                    <label for="">4. Melow or Hype</label>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype" />
                                        <label class="custom-control-label" for="hype">1</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype2" />
                                        <label class="custom-control-label" for="hype2">2</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype3" />
                                        <label class="custom-control-label" for="hype3">3</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype4" />
                                        <label class="custom-control-label" for="hype4">4</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype5" />
                                        <label class="custom-control-label" for="hype5">5</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype6" />
                                        <label class="custom-control-label" for="hype6">6</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype7" />
                                        <label class="custom-control-label" for="hype7">7</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype8" />
                                        <label class="custom-control-label" for="hype8">8</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype9" />
                                        <label class="custom-control-label" for="hype9">9</label>
                                    </div>
                                    <div class="radio hypecheck">
                                        <input class="input-radio" type="radio" name="flexRadioDefault" id="hype10" />
                                        <label class="custom-control-label" for="hype10">10</label>
                                    </div>
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

export default AddSound;