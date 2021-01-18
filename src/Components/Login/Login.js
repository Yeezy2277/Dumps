import s from "./Login.module.css"
import React from "react";
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import Support from "../Support/Support";

const Login = () => {
    return  <div>
        <Logo/>
        <div className={s.loginContainer}>
            <div className={s.loginForm}>
                <form>
                    <div className={s.formHeader}>
                        <img src="Vector(1).png" alt=""/>
                            <h1>Авторизация</h1>
                    </div>
                    <div className={s.loginForm__input}>
                        <div className={s.loginInput}>
                            <p>Логин</p>
                            <input type="text"/>
                        </div>
                        <div className={s.passwordInput}>
                            <p>Пароль</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className={s.loginForm__btn}>
                        <NavLink to={'/account'}>Войти</NavLink>
                    </div>
                    <div className={s.formRecovery}>
                        <NavLink to={'/home'}>Зарегистрироваться</NavLink>
                        <NavLink to={'/recovery-password'}>Восстановить пароль</NavLink>
                    </div>
                </form>
            </div>
        </div>
        <Support/>
    </div>
}

export default Login;