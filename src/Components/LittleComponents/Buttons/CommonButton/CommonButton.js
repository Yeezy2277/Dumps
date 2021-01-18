import s from "./CommonButton.module.css"
import React from "react";
import {NavLink} from "react-router-dom";

const CommonButton = (props) => {
    return  <div>
        {props.color === 'orange' ? <div className={s.orangeBtns}>
            <NavLink to={props.link} type="button">{props.text}</NavLink>
        </div> : props.color === 'silver' ?  <div className={s.silverBtns}>
            <NavLink to={props.link} type="button">{props.text}</NavLink>
        </div> : props.color === 'yellow' ? <div className={s.yellowBtns}>
            <NavLink to={props.link} type="button">{props.text}</NavLink>
        </div> : props.color === 'red' ? <div className={s.redBtns}>
            <NavLink to={props.link} type="button">{props.text}</NavLink>
        </div> : <p>задайте цвет кнопке</p>}
    </div>
}

export default CommonButton;