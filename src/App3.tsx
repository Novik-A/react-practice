import React, {useState} from 'react';
import './App3.css';
import CounterBlock from "./Count";

// project VLAD
let count = 0
function App3() {
    const [screenChange, setCount] = useState({sum: 0, brightIns: true, brightRes: false})
    const clickIns = () => {
        setCount({sum: count + 1, brightIns: true, brightRes: true})
        count++
        console.log(count)
    }
    const clickRes = () => {
        setCount({sum: 0, brightIns: true, brightRes: false})
        count = 0
    }
    return (
        <div className="App">
            <CounterBlock
                clickIns={clickIns}
                clickRes={clickRes}
                screenChange={screenChange}
            />
        </div>
    );
}
export default App3;
