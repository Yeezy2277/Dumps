import s from './Register.module.css'
import React from "react";

const RegisterForm = (props) => {
    return props.type === 'register' ? <div className={s.formText}>
            <p>Организационно-правовая форма</p>
            <p>ИНН</p>
            <p>Полное наименование компании или ФИО</p>
            <p>E-MAIL</p>
            <p>НОМЕР ТЕЛЕФОНА</p>
        </div> : props.type === 'object' ? <div className={s.formText}>
            <p>Адрес объекта</p>
            <p>Данные договора подряда</p>
            <p>Общий объект в м<sup>3</sup></p>
            <p>Порядок оплаты</p>
            <p>Документы об утилизации предоставляет</p>
        </div> : props.type === 'dump' ? <div className={s.formText}>
            <p>Марка/модель</p>
            <p>Гос.номер</p>
            <p>Серия, номер свидетельства о регистрации ТС</p>
            <p>Серия и номер ПТС</p>
            <p>Объем кузова в м<sup>3</sup></p>
        </div> : <p/>
}

export default RegisterForm;