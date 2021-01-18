import React from "react";
import s from "./AccountCustomer.module.css"
import CommonHeader from "../../CommonHeader/CommonHeader";
import {NavLink} from "react-router-dom";
import '../../../App.css';
import CommonButton from "../../LittleComponents/Buttons/CommonButton/CommonButton";
import PlusButton from "../../LittleComponents/Buttons/PlusButton/PlusButton";
import PointButton from "../../LittleComponents/Buttons/PointButton/PointButton";
import Support from "../../Support/Support";

const AccountCustomer = (props) => {
    return <div>
        <CommonHeader/>
        <div className={s.carrierAccount__headerText}>
            <div className={s.carrierAccount__headerText__item}>
                <p>Личный кабинет Заказчика</p>
            </div>
        </div>
        <div className={s.dataForms_customer}>
            <div className={s.registeredData}>
                <h1>Регистрационные данные</h1>
                <hr/>
                <div className={s.customerFormInput}>
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
                    <div className={s.customerFormButtons}>
                        <CommonButton link={'/change-info'} color={'silver'} text={'Изменить данные'}/>
                        <CommonButton link={'/change-password'} color={'silver'} text={'Изменить пароль'}/>
                    </div>
                </div>
            </div>
            <div className={s.registeredObjects}>
                <h1>Зарегистрированные объекты</h1>
                <hr/>
                <div className={s.registeredObjects__items}>
                    <button>
                        <PlusButton color={'black'}/>
                    </button>
                    <div className={s.objectAddress}>
                        <p>Адрес объекта</p>
                    </div>
                    <div className={s.objectAddress}>
                        <p>Адрес объекта</p>
                    </div>
                    <div className={s.objectAddress}>
                        <p>Адрес объекта</p>
                    </div>
                    <button>
                       <PointButton color={'black'}/>
                    </button>
                </div>
                <div className={s.registeredObjects__btn}>
                    <CommonButton link={'/new-object'} color={'orange'} text={'Зарегистрировать новый объект'}/>
                </div>
            </div>
        </div>
        <Support/>
    </div>
}

export default AccountCustomer;