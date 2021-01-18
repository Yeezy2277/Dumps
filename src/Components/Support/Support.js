import React from "react";
import s from './Support.module.css'
import {NavLink} from "react-router-dom";
import '../../App.css';

const Support = (props) => {
    return <div className={s.support}>
    <NavLink to={'/support'}>ОБРАТИТЬСЯ
        В СЛУЖБУ
        ПОДДЕРЖКИ</NavLink>
    </div>
}

export default Support;

