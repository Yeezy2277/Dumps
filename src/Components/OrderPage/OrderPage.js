import s from './OrderPage.module.css'
import CommonHeader from "../CommonHeader/CommonHeader";
import Header from "../LittleComponents/Header/Header";
import CommonButton from "../LittleComponents/Buttons/CommonButton/CommonButton";
import InfoFromCarrier from "./InfoFromCarrier/InfoFromCarrier";
import Support from "../Support/Support";

const OrderPage = (props) => {
    return <div>
        <CommonHeader/>
        <Header text={'Страница заказа'}/>
        <div className={s.container}>
            <div className={s.block1}>
                <h1>Параметры заказа</h1>
                <hr/>
                <div className={s.block__input}>
                    <p>Дата заказа</p>
                    <input type="text"/>
                    <p>Номер смены</p>
                    <input type="text"/>
                    <p>Объем заказа</p>
                    <input type="text"/>
                    <p>Цена единицы заказа без НДС</p>
                    <input type="text"/>
                </div>
                <div className={s.balanceBlock}>
                    <h1>Остаток</h1>
                    <hr/>
                    <div className={s.balance}>
                        <p>000 000 120 023</p>
                    </div>
                    <div className={s.balanceButton}>
                        <CommonButton link={'/cancel-order'} color={'silver'} text={'Отменить заказ'}/>
                    </div>
                </div>
            </div>
            <div className={s.block2}>
                <h1>Принятые объемы</h1>
                <hr/>
                <div className={s.infoCarrier}>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <InfoFromCarrier info={'Тут данные'} number={'000 000 120 023'}/>
                    <button className={s.infoBtn}>
                        <img src="ellipse2.png" alt=""/>
                        <img src="ellipse2.png" alt=""/>
                        <img src="ellipse2.png" alt=""/>
                    </button>
                </div>
            </div>
        </div>
        <Support/>
    </div>
}

export default OrderPage;
