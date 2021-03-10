import React from 'react';
import s from './ButtonClick.module.css'

type ButtonClickPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export function ButtonClick(props: ButtonClickPropsType) {
    return <button
        className={s[props.title]}
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.title}
    </button>
}