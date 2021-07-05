import React from 'react';
import Sidebar from '../Sidebar';

const Analytics = () => {
    return(
        <div className="col-md-12">
            <div className="analytic-data">                    
                <div className="row">
                <div className="col-md-6 camp-share">
                        <div className="share-title">
                            <h2>General</h2>
                        </div>
                        <table class="table table-bordered">
                            <tbody  className="single-camp-data">
                                <tr>
                                    <th scope="row"><span className="campsign overall"></span>Website visitors:</th>
                                    <td className="firstrow">53 (100%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign insta"></span>GOLs:</th>
                                    <td>26 (49%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign twitter"></span>Emails:</th>
                                    <td>28 (51%)</td>
                                </tr>
                                
                            </tbody>    
                        </table>
                    </div>
                    <div className="col-md-6 camp-share">
                        <div className="share-title">
                            <h2>Shares</h2>
                        </div>
                        <table class="table table-bordered">
                            <tbody  className="single-camp-data">
                                <tr>
                                    <th scope="row"><span className="campsign overall"></span>Overall:</th>
                                    <td className="firstrow">26 (100%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign insta"></span>Instagram:</th>
                                    <td>13 (50%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign twitter"></span>Twitter:</th>
                                    <td>3 (9.8%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign twitter"></span>Facebook:</th>
                                    <td>10 (40.2%)</td>
                                </tr>
                            </tbody>    
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics;