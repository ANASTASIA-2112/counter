import React from 'react';
import Display from "./Display";
import SuperButton from "./superButton";




export type PropsType ={
    count:number
    inc:()=>void
    reset :()=>void
    maxValue:number
}



const Counter = (props:PropsType) => {
    return (
        <div className={"Counter"}>
            <Display count={props.count}/>
            <SuperButton
                reset={props.reset}
                inc={props.inc}
                maxValue={props.maxValue}
                count={props.count}
            />
            
        </div>
    );
};

export default Counter;