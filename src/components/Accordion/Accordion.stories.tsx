import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion title={'Menu'}
                                                  collapsed={true}
                                                  clickTitle={callback}
                                                  items={[]}
                                                  currentValue={''}
                                                  onClick={onClickCallback} />
export const UserUncollapsedMode = () => <Accordion title={'Users'}
                                                    collapsed={false}
                                                    clickTitle={callback}
                                                    items={[{title: 'Dima', value: 1},{title: 'Valera', value: 2},{title: 'Victor', value: 3}]}
                                                    currentValue={2}
                                                    onClick={onClickCallback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<any>(0)
    return <Accordion title={'Users'}
                      collapsed={value}
                      clickTitle={() => setValue(!value)}
                      items={[{title: 'Dima', value: 1},{title: 'Valera', value: 2},{title: 'Victor', value: 3}]}
                      currentValue={currentValue}
                      onClick={(e) => setCurrentValue(e)} />
}