import s from "./PointButton.module.css"
import React from "react";

const PointButton = (props) => {
    return  <div>
        {props.color === 'black' ?  <div className={s.linkPointBlack}>
            <img src="ellipse.png" alt=""/>
            <img src="ellipse.png" alt=""/>
            <img src="ellipse.png" alt=""/>
        </div> : props.color === 'gray' ?  <div className={s.linkPointGray}>
            <img src="ellipse2.png" alt=""/>
            <img src="ellipse2.png" alt=""/>
            <img src="ellipse2.png" alt=""/>
        </div> : <p>Задайте цвет кнопки</p>}
    </div>
}

export default PointButton;