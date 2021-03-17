import React, {useState} from 'react';
import './App.css';

import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App2() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const clickTitle = () => setCollapsed(!collapsed)
    const items = [{title: 'Dima', value: 1},{title: 'Valera', value: 2},{title: 'Victor', value: 3}]
    const [currentValue, setCurrentValue] = useState<number>(0)
    const [value, setValue] = useState<number>(0)
    return (
        <div className="App">
            <Accordion title={'Menu'}
                       collapsed={collapsed}
                       clickTitle={clickTitle}
                       items={items}
                       currentValue={currentValue}
                       onClick={setCurrentValue} />
            <Rating value={value}
                    setValue={(value) => setValue(value)}/>
        </div>
    );
}

export default App2