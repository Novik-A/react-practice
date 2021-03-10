import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    clickTitle: () => void
}

export function Accordion(props: AccordionPropsType) {


    return <div>
        <AccordionTitle title={props.title} clickTitle={props.clickTitle}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    clickTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div>
        <h3 onClick={props.clickTitle}>{props.title}</h3>
    </div>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
