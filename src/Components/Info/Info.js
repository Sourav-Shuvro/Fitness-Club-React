import React from 'react';
import './Info.css'

const Info = (props) => {
    console.log(props)

    let totalTime =0;
    const times = props.times;
    for(const time of times){
        totalTime = totalTime + time;
    }

    return (
        <section>
            <div className='info-header'>
                <p>Sourav Kumar Sarkar</p>
                <small>Rajshahi, BD</small>
            </div>
            <div className='w-h-a'>
                <div>
                    <h3>60<small>kg</small></h3>
                    <small>Weight</small>
                </div>
                <div>
                    <h3>5.6</h3>
                    <small>Height</small>
                </div>
                <div>
                    <h3>25<small>years</small></h3>
                    <small>Age</small>
                </div>
            </div>
            <div className="break-info">
                <p>Add A Break</p>
                <div className="break-time">
                    <button onClick={()=>props.breakTime(10)}>10s</button>
                    <button onClick={()=>props.breakTime(20)}>20s</button>
                    <button onClick={()=>props.breakTime(30)}>30s</button>
                    <button onClick={()=>props.breakTime(40)}>40s</button>
                    <button onClick={()=>props.breakTime(50)}>50s</button>
                </div>
            </div>
            <div className="details">
                <h3>Exercise Details:</h3>
                <p className='e-time'>Exercise Time: {totalTime} s</p>
                <p className='b-time'>Break Time: {props.breaks}s</p>
                <button>Completed</button>
            </div>
        </section>
    );
};

export default Info;