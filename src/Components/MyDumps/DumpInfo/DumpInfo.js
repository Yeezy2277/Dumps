import s from "./DumpInfo.module.css"
import React from "react";
import '../../../App.css';
import CommonButton from "../../LittleComponents/Buttons/CommonButton/CommonButton";

const DumpInfo = (props) => {
    return <div>
        <div className={s.container__item}>
            <h1>Самосвал 001</h1>
            <hr/>
            <div className={s.info}>
                <div>
                    <p>Марка/модель</p>
                    <p>Гос.номер</p>
                    <p>Серия</p>
                    <p>Серия и номер ПТС</p>
                    <p>Объем кузова в м3</p>
                </div>
                <div className={s.data}>
                    <p>**.**.****</p>
                    <p>000001</p>
                    <p>*******</p>
                    <p>********</p>
                    <p>********</p>
                </div>
            </div>
            <div className={s.buttons}>
                <CommonButton color={'yellow'} link={'/change-info'} text={'Изменить'}/>
                <CommonButton color={'red'} link={'/delete-info'} text={'Удалить'}/>
            </div>
        </div>
    </div>
}
export default DumpInfo;