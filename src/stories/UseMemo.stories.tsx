import React, {useMemo, useState} from 'react';


export default {
    title: 'useMemo',
};

export const Example1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        debugger
        for (let i = 1; i <= a; i++) {
            resultA *= i
        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <div>Result a: {resultA}</div>
        <div>Result b: {resultB}</div>
    </>
}