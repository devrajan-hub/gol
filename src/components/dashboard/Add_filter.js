import React,{useEffect, useState} from 'react';
import { NavLink,Link, useHistory} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import closeicon from '../../assets/images/close_icon.svg';

const Addfilter = (props) => {
    console.log('propsdgsdg',props);
    var filterid = (props.location.filterdata != null) ? props.location.filterdata.filter.id : '';
    var camprowId = (props.location.filterdata) ? props.location.filterdata.id : '';
    var camprowId = (props.location.campid) ? props.location.campid : camprowId;
    console.log('propscscamprowId',camprowId);
    let history = useHistory();
    const [items, setItems] =  useState([]);
    useEffect(() => {        
        fetch("https://viddey-backend.herokuapp.com/api/v1/filters", {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            setItems(response.payload);
        })
        .catch(err => { console.log(err); 
        });
    })
    const selectFilter = (e) => {
        var elem = document.getElementsByClassName("f_block"); 
        var dataid = elem[0].getAttribute('data-id');
        console.log('dataid',dataid);
        elem[0].className += " activeblock";
        localStorage.setItem('filterid', dataid);
    }
    // console.log('asfsafsagf',items);
    // var indents = [];
    // for (var i = 0; i < 12; i++) {
    //     indents.push(<div className='col-md-2 filter-block' key={i}>
    //         <div className="f_block">
    //             <div className="filter_image"></div>
    //             <h4>Filter Name</h4>
    //         </div>
    //     </div>);
    // }
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="section-padding">
                    <div className="heading-block">
                        <h1>Add filter</h1> 
                        <div className="closebtn">
                            <Link to={{pathname:'/branded-gol', campid:camprowId, block:''}}><img src={closeicon} /></Link>
                        </div>
                    </div>
                    </div>
                    <div className="filter col-md-12">
                        <div className="row">
                        {items.map(item => (
                            <div className={(item.id == filterid) ? 'col-md-2 filter-block selected' : 'col-md-2 filter-block' } key={item.id}>
                                <div className="f_block" data-id={item.id} onClick={selectFilter}>
                                    <div className="filter_image"></div>
                                    <h4>{item.name}</h4>
                                </div>
                            </div>      
                        ))}
                        </div>
                    </div>        
                </div>        
            </div>    
        </div>    
    )
}
export default Addfilter;