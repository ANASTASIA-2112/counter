


export  type ButtonPropsType={
    count:number
    inc:()=>void
    reset:()=>void
    maxValue:number
}
export function SuperButton (props:ButtonPropsType) {


        return (
            <div>

                <input className={"superButton"}
                       value={"inc"}
                       type={"button"}
                       onClick={props.inc}
                       disabled={props.count === props.maxValue}/>
                <input className={"superButton"}
                       value={"reset"}
                       type={"button"}
                       onClick={props.reset}
                       disabled={props.count ===0}/>
            </div>

        );
    };
export default SuperButton;