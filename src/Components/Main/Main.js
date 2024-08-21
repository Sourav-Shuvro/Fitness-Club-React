import React, { useEffect, useState } from 'react';
import './Main.css'
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Info from '../Info/Info';
const Main = () => {

    const [items,setItems] = useState([]);
    const [times,setTimes] = useState([]);
    const [breaks, setBreaks] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const exerciseTime = (time) =>{
        const newTimes = [...times,time];
        setTimes(newTimes);
    }

    const breakTime = time =>{
        setBreaks(time);
    }
    return (
        <section className='container'>
            <div className='main-container'>
                <Header></Header>
                <div  className="exercise">
                {
                    items.map(item => <Exercise items={item} key={item.id} time={exerciseTime}></Exercise>)
                }
                </div>
            </div>
            <div className="info">
                <Info times = {times} breakTime={breakTime} breaks={breaks}></Info>
            </div>
        </section>
    );
};

export default Main;