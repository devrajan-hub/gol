import React from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import defaultimage from '../../assets/images/default-image.jpg';
import arrow from '../../assets/images/arrow.svg';

const SingleMarketing = () => {
    return(
        <div className="col-md-12">
        <div className="row">
            <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container">
                    <div className="col-md-12">
                        <div className="backtopage">
                            <Link to="/marketing-resources"><img src={arrow} />Back</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="single-marketing">
                            <div className="marketing-img">
                                <img src={defaultimage} />
                            </div>
                            <div className="postdate">
                                <span>16.04.2021</span>
                            </div>    
                            <div className="marketing-title">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
                            </div>
                            <div className="marketing-content">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                                    At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                                </p>
                            </div>    
                        </div>    
                    </div>    
                </div>    
            </div>    
        </div>    
    </div>    
    )
}

export default SingleMarketing;