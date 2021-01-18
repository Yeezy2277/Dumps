import {NavLink} from "react-router-dom";
import s from "./HomePage.module.css"
import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";
import Support from "../Support/Support";

const HomePage = () => {
    return  <div>
    <CommonHeader spec={true}/>
        <div className={s.registerBtns}>
            <div className={s.registerBtns__btn}>
                <NavLink to={'/register-carrier'}>Перевозчикам</NavLink>
            </div>
            <hr/>
            <div className={s.registerBtns__btn}>
                <NavLink to={'/register-customer'}>Заказчикам</NavLink>
            </div>
    </div>
        <Support/>
    </div>
}

export default HomePage;