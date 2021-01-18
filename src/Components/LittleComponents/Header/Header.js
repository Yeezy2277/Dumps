import s from "./Header.module.css"
import React from "react";

const Header = (props) => {
    return  <div>
        <div className={s.header}>
            <div className={s.headerItem}>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
}

export default Header;