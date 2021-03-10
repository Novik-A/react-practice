import React, {useState} from 'react';
import './App.css';

import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App2() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const clickTitle = () => setCollapsed(!collapsed)
    const [value, setValue] = useState<number>(0)
    return (
        <div className="App">
            <Accordion title={'Menu'} collapsed={collapsed} clickTitle={clickTitle}/>
            <Rating value={value} setValue={(value) => setValue(value)}/>
        </div>
    );
}

export default App2