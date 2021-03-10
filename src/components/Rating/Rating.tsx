import React from "react";

type RatingPropsType = {
    value: number
    setValue: (value: number) => void
}
type StarPropsType = {
    value: number
    selected: boolean
    setValue: (value: number) => void
}

export function Rating(props: RatingPropsType) {
    return <div>
        <Star value={1} selected={props.value > 0} setValue={props.setValue}/>
        <Star value={2} selected={props.value > 1} setValue={props.setValue}/>
        <Star value={3} selected={props.value > 2} setValue={props.setValue}/>
        <Star value={4} selected={props.value > 3} setValue={props.setValue}/>
        <Star value={5} selected={props.value > 4} setValue={props.setValue}/>
    </div>
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : 'star '}
        </span>
}