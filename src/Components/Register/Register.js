import React from "react";
import s from "./Register.module.css"
import CommonHeader from "../CommonHeader/CommonHeader";
import RegisterForm from "./RegisterForm";
import RegisterAlert from "./RegisterAlert";
import RegisterInput from "./RegisterInput";
import Support from "../Support/Support";

const Register = (props) => {
    return <div>
        <CommonHeader/>
        <div className={s.alertContainer}>
            <div className={s.alert}>
                {props.type === 'register' ? <RegisterAlert type={'register'}/>
                    : props.type === 'object' ? <RegisterAlert type={'object'}/>
                        : props.type === 'dump' ? <RegisterAlert type={'dump'}/>
                            : <p/>}
            </div>
        </div>
        <form className={s.registerForm}>
            <div className={s.formInputContainer}>
                {props.type === 'register' ? <RegisterForm type={'register'}/>
                    : props.type === 'object' ? <RegisterForm type={'object'}/>
                        : props.type === 'dump' ? <RegisterForm type={'dump'}/>
                            : <p/>}
                {props.type === 'register' ? <RegisterInput type={'register'}/>
                    : props.type === 'object' ? <RegisterInput type={'object'}/>
                        : props.type === 'dump' ? <RegisterInput type={'dump'}/>
                            : <p/>}
            </div>
            {props.type === 'register' ?
                <div className={s.registerVector}>
                    <div className={s.registerVector__circle}>
                        <img src="Vector.png" alt=""/>
                    </div>
                    <div>
                        <p>Я принимаю условия Пользовательского соглашения</p>
                    </div>
                </div> : <p/>}
            <button type='submit' className={s.registerBtn}>Зарегистрироваться</button>
        </form>
    <Support/>
    </div>
}

export default Register;