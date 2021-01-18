import s from "./LogisticItem.module.css";

const LogisticItem = (props) => {
    return <div>
        <div className={s.container__item}>
            <h1>Параметры заказа</h1>
            <hr/>
            <div className={s.itemContainer}>
                <div className={s.info}>
                    <div className={s.leftText}>
                        <p>Дата заказа</p>
                        <p>Номер смены</p>
                        <p>Объём заказа</p>
                        <p>Цена</p>
                    </div>
                    <div className={s.rightText}>
                        <p>**.**.****</p>
                        <p>000001</p>
                        <p>*******</p>
                        <p>********</p>
                    </div>
                </div>
                <div className={s.buttons}>
                    <button className={s.acceptOrderBtn}>Принять заказ</button>
                </div>
            </div>
        </div>
    </div>
}

export default LogisticItem