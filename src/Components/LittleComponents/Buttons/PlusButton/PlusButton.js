import s from "./PlusButton.module.css"
import React from "react";

const PlusButton = (props) => {
    return  <div>
        {props.color === 'black' ? <div className={s.linkPlusBlack}>
            <img className={s.rect1} src="rect.png" alt=""/>
            <img className={s.rect2} src="rect2.png" alt=""/>
        </div> : props.color === 'gray' ? <div className={s.linkPlusGray}>
            <img className={s.rect1} src="rect11.png" alt=""/>
            <img className={s.rect2} src="rect12.png" alt=""/>
        </div> : <p>Задайте цвет кнопки</p>}
    </div>
}

export default PlusButton;