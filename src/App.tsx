import React, {useState} from 'react';
import './App.css';

import {ButtonClick} from "./components/ButtonClick/ButtonClick";

const maxCount = 5

function App() {
    const [count, setCount] = useState<number>(0)
    const changeCount = () => {
        // const newCount = count !== maxCount ?  : maxCount
        setCount(count + 1)
    }
    const resetCount = () => setCount(0)

    return (
        <div className="App">
            <div className={count === maxCount ? 'red' : 'count'}>
                {count}
            </div>
            <ButtonClick
                title={'inc'}
                onClick={changeCount}
                disabled={count === maxCount}
            />
            <ButtonClick
                title={'reset'}
                onClick={resetCount}
                disabled={count === 0} />
        </div>
    );
}


// export default App