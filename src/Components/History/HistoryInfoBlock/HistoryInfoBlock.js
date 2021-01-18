import s from './HistoryInfoBlock.module.css'
import CommonButton from "../../LittleComponents/Buttons/CommonButton/CommonButton";

const HistoryInfoBlock = (props) => {
    return <div>
        <div className={s.block}>
            <h1>Параметры заказа</h1>
            <hr/>
            <div className={s.block__item}>
                <div className={s.leftText}>
                    <p>Дата заказа</p>
                    <p>Номер смены</p>
                    <p>Объём заказа</p>
                    <p>Цена</p>
                </div>
                <div className={s.rightText}>
                    <p>**.**.****</p>
                    <p>2</p>
                    <p>*******</p>
                    <p>********</p>
                </div>
            </div>
            <div className={s.infoButton}>
                <p>{props.textButton}</p>
            </div>
        </div>
    </div>
}

export default HistoryInfoBlock;