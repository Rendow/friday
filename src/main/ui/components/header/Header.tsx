import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from './Header.module.css'

export const Header: React.FC = () => {
    return (
        <div className={s.wrap}>
                <div className={s.header}>
                        <div className={s.nav}>
                                <NavLink to={PATH.TEST}>test</NavLink>
                                <NavLink to={PATH.PROFILE}>profile</NavLink>
                                <NavLink to={PATH.AUTHORIZATION}>auth</NavLink>
                                <NavLink to={PATH.REGISTRATION}>register</NavLink>
                                <NavLink to={PATH.ERROR_404}>error</NavLink>
                                <NavLink to={PATH.NEW_PASSWORD}>pass new</NavLink>
                                <NavLink to={PATH.PASSWORD_RECOVERY}>pass recovery</NavLink>
                                <NavLink to={PATH.TABLE}>table</NavLink>
                                <NavLink to={PATH.MODAL}>modal</NavLink>
                        </div>
                </div>
        </div>
     )
}
