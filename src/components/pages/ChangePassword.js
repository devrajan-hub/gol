import React from 'react';
import closeicon from '../../../src/assets/images/close_icon.svg';

const ChangePassword = () => {
    return(
        <div className="container">
            <div className="closeicon">
                    <img src={closeicon} />
            </div>
            <div className="clearfix"></div>
            <div className="col-md-12">
                
                <div className="">
                    <div className="changepassword">
                        <h1>Password</h1>
                        <p>Set new password below</p>
                        <form method="post" action="">
                            <div class="form-group">
                               <label for="inputEmail4">Set new password</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="New password"></input>
                            </div>
                            <div className="form-group">
                               <label for="inputEmail4">Confirm new password</label>
                                <input type="text" className="form-control" id="" placeholder="New password"></input>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail4">Submit your current password to save changes</label>
                                <input type="text" className="form-control" id="" placeholder="Current password"></input>
                            </div>
                            <button type="submit" className="btn btn-primary btn-gradient">Save</button>
                        </form>
                    </div>    
                </div>    
            </div>    
        </div>    
    )
}
export default ChangePassword;