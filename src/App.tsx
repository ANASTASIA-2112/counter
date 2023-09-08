import './App.css';
import {useState} from "react";
import Counter from "./Counter";


function App() {

    const [count, setCount] = useState(0)
    const [maxValue,setMaxValue]=useState(5)

    const inc = () => {
       setMaxValue(5)
        setCount(count + 1)
    }
    const reset = () => {

        setCount(0)
    }

    return (
        <div className={"App"}>
            <Counter
                count={count}
                inc={inc}
                reset={reset}
                maxValue={maxValue}

            />

        </div>
    );
}

export default App;
