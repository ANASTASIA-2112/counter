import React from 'react';



export  type DisplayPropsType={
    count:number

}

const Display = (props:DisplayPropsType) => {
    return (
        <div className={"display"}>
        <span className={props.count === 5 ? "error": " "}>{props.count}</span>
        </div>
    );
};

export default Display;