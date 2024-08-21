import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    // console.log(props);
    const {img,age,name,time,highlights} = props.items;
    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{highlights}</p>
            <p>For Age: <span className='age-time'><strong>{age}</strong></span> Years</p>
            <p>Duration: <span className='age-time'><strong>{time}</strong></span>s</p>
            <button onClick={()=>props.time(time)}>Add to list</button>
        </div>
    );
};

export default Exercise;