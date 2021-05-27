import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import Header from "./header/Header";
import React from "react";

export const Test = () => {
    return <>
        <Header/>

    <SuperInputText/>
    <SuperButton>
        BUTTON
    </SuperButton>
    <SuperCheckbox/>

    </>
}