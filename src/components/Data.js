import React from 'react';

const Data=(props)=>{
    return (
        <div className="rect">
            <h2>{props.title}</h2>
            <h3>{props.value}</h3>
        </div>
    )
}

export default Data;