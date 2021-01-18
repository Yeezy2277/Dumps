import s from './Register.module.css'
import React from "react";

const RegisterAlert = (props) => {
    return props.type === 'register' ? <div>
        <h4>Зарегистрируйтесь на платформе в качестве {props.user} для получения доступа к заказам</h4>
        <p>Заполните все поля для получения доступа</p>
    </div> : props.type === 'object' ? <div>
        <h4>Зарегистрируйте новый объект</h4>
        <p>Заполните все поля</p>
    </div> : props.type === 'dump' ? <div>
        <h4>Зарегистрируйте новый самосвал</h4>
        <p>Заполните все поля</p>
    </div> : <p/>
}

export default RegisterAlert;