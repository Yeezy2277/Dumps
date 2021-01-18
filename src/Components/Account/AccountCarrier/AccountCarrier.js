import React from "react";
import s from "./AccountCarrier.module.css"
import CommonHeader from "../../CommonHeader/CommonHeader";
import {NavLink} from "react-router-dom";
import '../../../App.css';
import Support from "../../Support/Support";

const AccountCarrier = (props) => {
    return <div>
        <CommonHeader/>
        <div className={s.carrierAcccount__headerText}>
            <div className={s.carrierAcccount__headerText__item}>
                <p>Личный кабинет Перевозчика</p>
            </div>
        </div>
        <div className={s.dataForms}>
            <form className={s.dataCarrier}>
                <h1>Регистрационные данные</h1>
                <hr/>
                <div className={s.carrierFormInput}>
                    <p>Организационно-правовая форма</p>
                    <input type="text"/>
                    <p>ИНН</p>
                    <input type="text"/>
                    <p>Полное наименование компании или ФИО</p>
                    <input type="text"/>
                    <p>E-mail</p>
                    <input type="text"/>
                    <p>Номер телефона</p>
                    <input type="text"/>
                </div>
            </form>
            <form className={s.carrierFormButtons}>
                <div className='orangeBtns' id='orangeBtn'>
                    <NavLink to={'/my-samosvals'} type="button">Мои самосвалы</NavLink>
                    <NavLink to={'/my-transportations'} type="button">Мои перевозки</NavLink>
                </div>
                <div className='silverBtns' id='silverBtn'>
                    <NavLink to={'/change-info'} type="button">Изменить данные</NavLink>
                    <NavLink to={'/change-password'} type="button">Изменить пароль</NavLink>
                </div>
            </form>
        </div>
        <Support/>
    </div>
}

export default AccountCarrier;