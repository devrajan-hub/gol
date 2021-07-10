import React, {useEffect} from 'react';
import Sidebar from '../dashboard/Sidebar';
import $ from'jquery';
const Analytics = () => {

    return(
        <div className="col-md-12">
            <div className="analytic-data">                    
                <h3>You have 3 campaigns:</h3>
                <div className="row">
                <div id="chartContainer"></div>
                    <div className="col-md-12 campaign-table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Campaign</th>
                                <th scope="col"><span className="campsign insta"></span>Remy Martin</th>
                                <th scope="col"><span className="campsign yellow"></span>Womanish</th>
                                <th scope="col"><span className="campsign face"></span>Graduated</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Emails</td>
                                <td>28</td>
                                <td>835</td>
                                <td>3,412</td>
                                <td>4,275</td>
                            </tr>
                            <tr>
                                <td>GOLs</td>
                                <td>26</td>
                                <td>801</td>
                                <td>2,236</td>
                                <td>3,063</td>
                            </tr>
                        </tbody>    
                    </table>    
                    </div>
                    <div className="col-md-12 share-title">
                        <h2>Shares</h2>
                    </div>    
                    <div className="col-md-12 camp-share">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row"><span className="campsign overall"></span>Overall:</th>
                                    <td className="firstrow">3,063 (100%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign insta"></span>Instagram:</th>
                                    <td>1,531 (49.5%)</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="campsign twitter"></span>Twitter:</th>
                                    <td>306 (9.8%)</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="lastrow"><span className="campsign face"></span>Facebook:</th>
                                    <td className="lastrow">1000 (40.2%)</td>
                                </tr>
                            </tbody>    
                        </table>    
                    </div>    
                    <div className="col-md-12 single-campname">
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
            </div>
        </div> 
    )
}

export default Analytics;