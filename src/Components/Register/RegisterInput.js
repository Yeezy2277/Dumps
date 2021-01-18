import s from './Register.module.css'
import React from "react";

const RegisterInput = (props) => {
    return props.type === 'register' ? <div className={s.formInput}>
        <select>
            <option>Юридическое лицо</option>
            <option>Физическое лицо</option>
        </select>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
    </div> : props.type === 'object' ? <div className={s.formInput}>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <div>
            <div className={s.radioContainer}>
                <div className={s.radio}>
                    <label className={s.customRadio}>
                        <input type="radio" name="rButton" value="Заказчик"/>
                        <span>Заказчик</span>
                    </label>
                </div>
                <div className={s.radio}>
                    <label className={s.customRadio}>
                        <input type="radio" name="rButton" value="Перевозчик"/>
                        <span>Перевозчик</span>
                    </label>
                </div>
            </div>
        </div>
    </div> : props.type === 'dump' ? <div className={s.formInput}>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
    </div> : <p/>
}

export default RegisterInput;