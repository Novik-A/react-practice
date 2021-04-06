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

const AccordionMemo: React.FC<AccordionPropsType> = props => {
    return <div>
        <AccordionTitle title={props.title} clickTitle={props.clickTitle}/>
        {!props.collapsed && <AccordionBody items={props.items} currentValue={props.currentValue} onClick={props.onClick} />}
    </div>
}

export const Accordion = React.memo(AccordionMemo)

type AccordionTitlePropsType = {
    title: string
    clickTitle: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {

    return <div>
        <h3 onClick={(e) => props.clickTitle()}>{props.title}</h3>
    </div>
}
const AccordionTitle = React.memo(AccordionTitleMemo)

type AccordionBodyPropsType = {
    items: ItemType[]
    currentValue: any
    onClick: (value: any) => void
}

function AccordionBodyMemo(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{props.currentValue === i.value ? <b>{i.title}</b> : `${i.title}`}</li>)}
        </ul>
}
const AccordionBody = React.memo(AccordionBodyMemo)
