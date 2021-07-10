import React,{useEffect, useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
const Soundslist = (props) => {
    
    var soundId = (props.state) ? props.state.soundid : '';
    console.log('soundprop',props);
    const [items, setItems] = useState([]);
    const [soundid, setSoundId] = useState([]);
    useEffect(() => {        
        fetch("https://viddey-backend.herokuapp.com/api/v1/sounds/library-sounds", {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            // console.log('efedfedfef',response);
            setItems(response.payload);
        })
        .catch(err => { console.log(err); 
        });
    })
    
    const selectSound = (e) => {
       
        var elem = document.getElementsByClassName("s_block"); 
        // var dataid = elem[0].getAttribute('data-id');
        var dataid =  e.target.dataset.id;
        console.log('dataid',dataid);
        elem[0].className += " activeblock";
        setSoundId(dataid); 
        localStorage.setItem('soundid', dataid);
    }

    // var indents = [];
    // for (var i = 0; i < 12; i++) {
    //     indents.push(<div className='col-md-3 sound-block' key={i}>
    //         <div className="s_block">
    //             <h2>Song name</h2>
    //             <p>Happy</p>
    //             <NavLink to='/' className="select-sound">Select</NavLink>
    //         </div>
    //     </div>);
    // }
    return(
        <div className="sounds">
            <div className="soundfilter col-md-7">
                <div className="row">
                    <div className="col-md-6">
                        <select class="form-select selectpicker" aria-label="Default select example">
                            <option selected>Choose Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>    
                    <div className="col-md-6">
                        <section className="range-filter">
                            <div className="slider-price d-flex align-items-center">
                                <span className="small range-name mr-2">Mellow</span>
                                <input type="range" className="form-range" min="0" max="2" id="slider"></input>
                                <span className="small range-name ml-2">Hype</span>
                            </div>
                        </section>
                    </div>    
                </div>    
            </div>
            <div className="soundlist">    
                <div className="sound-block col-md-12">
                    <div className="row">
                    {items.map(item => (
                        <div className='col-md-3 sound-block'>
                            <div className={(item.id == soundId) ? 's_block selected' :'s_block'} id="" data-id={item.id} onClick={selectSound}>
                                <h2>{item.name}</h2>
                                <p>{item.category}</p>
                                <NavLink to={item.soundURL} className="select-sound">Select</NavLink>
                            </div>
                        </div>      
                    ))}
                        {/* {indents} */}
                    </div>
                </div> 
                <div className="select-msg">
                    <div className="soundlist-msg">
                        <p>First select a category, and set the mood from Mellow to Hype</p>
                    </div>    
                </div>    
            </div>
            <input type="hidden" id="addsound" value={soundid} />    
        </div>    
    )
}

export default Soundslist;