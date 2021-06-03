import React from 'react';
import Sidebar from '../dashboard/Sidebar';

const Addfilter = () => {
    var indents = [];
    for (var i = 0; i < 12; i++) {
        indents.push(<div className='col-md-2 filter-block' key={i}>
            <div className="f_block">
                <div className="filter_image"></div>
                <h4>Filter Name</h4>
            </div>
        </div>);
    }
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="heading-block">
                        <h1>Add filter</h1> 
                    </div>
                    <div className="filter col-md-12">
                        <div className="row">{indents}</div>
                    </div>        
                </div>        
            </div>    
        </div>    
    )
}
export default Addfilter;