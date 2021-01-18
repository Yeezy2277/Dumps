import React from "react";
import s from "./CommonHeader.module.css"
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";
const CommonHeader = (props) => {
    return <header className={s.commonHeader}>
        {!props.spec ? <Logo/> :  <div className={s.specialLogo}>
            <Logo/>
            <div className={s.logoDesc}>
                <p>Платформа для взаимодействия <br/> Заказчиков и Перевозчиков на вывозе грунта автосамосвалами</p>
            </div>
        </div>}
        <div className={s.linkAccount}>
            <NavLink to={'/account'}>Личный кабинет</NavLink>
        </div>
    </header>
}

export default CommonHeader;