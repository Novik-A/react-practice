import React from 'react';
const ButtonInsLook = (insBright: boolean) => {
    let insLook: string
    if (insBright) {
        insLook = "ButtonInsAct"
    } else {
        insLook = "ButtonInsPass"
    }
    return insLook
}
const ButtonResLook = (resBright: boolean) => {
    let resLook: string
    if (resBright) {
        resLook = "ButtonResAct"
    } else {
        resLook = "ButtonResPass"
    }
    return resLook
}

type realStateType = {
    sum: number
    brightIns: boolean
    brightRes: boolean }
type CounterBlockPropsType = {
    clickIns: () => void
    clickRes: () => void
    screenChange: realStateType
}

function CounterBlock(props: CounterBlockPropsType) {
    return (
        <div className="Counter">
            <div className={props.screenChange.sum === 5 ? 'ScreenRed' : 'Screen'}>{props.screenChange.sum}</div>
            <div className="Buttons">
                <button className={ButtonInsLook(props.screenChange.brightIns)}
                        disabled={props.screenChange.sum === 5}
                        onClick={props.clickIns}>inc
                </button>
                <button className={ButtonResLook(props.screenChange.brightRes)}
                        disabled={props.screenChange.sum === 0}
                        onClick={props.clickRes}>reset
                </button>
            </div>
        </div>
    )
}
export default CounterBlock