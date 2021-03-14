import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} clickTitle={callback} />
export const UserUncollapsedMode = () => <Accordion title={'Users'} collapsed={false} clickTitle={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'} collapsed={value} clickTitle={() => setValue(!value)} />
}