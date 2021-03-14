import React from 'react';

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    clickTitle: () => void
    items: ItemType[]
    currentValue: any
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} clickTitle={props.clickTitle}/>
        {!props.collapsed && <AccordionBody items={props.items} currentValue={props.currentValue} onClick={props.onClick} />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    clickTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div>
        <h3 onClick={(e) => props.clickTitle()}>{props.title}</h3>
    </div>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    currentValue: any
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{props.currentValue === i.value ? <b>{i.title}</b> : `${i.title}`}</li>)}
        </ul>
}
