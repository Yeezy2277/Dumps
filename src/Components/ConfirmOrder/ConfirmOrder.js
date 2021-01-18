import s from './ConfirmOrder.module.css'
import CommonHeader from "../CommonHeader/CommonHeader";
import Header from "../LittleComponents/Header/Header";
import CommonButton from "../LittleComponents/Buttons/CommonButton/CommonButton";
import Support from "../Support/Support";

const ConfirmOrder = (props) => {
    return <div>
        <CommonHeader/>
        <Header text={'прием заказа'}/>
        <div className={s.container}>
            <div className={s.form1}>
                <div className={s.form1__item}>
                    <form className={s.orderForm}>
                        <h1>Регистрационные данные</h1>
                        <hr/>
                        <div>
                            <p>Организационно-правовая форма</p>
                            <input type="text"/>
                            <p>ИНН</p>
                            <input type="text"/>
                            <p>Полное наименование компании или ФИО</p>
                            <input type="text"/>
                            <p>E-mail</p>
                            <input type="text"/>
                            <p>Номер телефона</p>
                            <input type="text"/>
                        </div>
                    </form>
                </div>
                <div className={s.form1__item}>
                    <form className={s.orderForm}>
                        <h1>Регистрационные данные объекта</h1>
                        <hr/>
                        <div className={s.carrierFormInput}>
                            <p>Адрес объекта</p>
                            <input type="text"/>
                            <p>Данные договора</p>
                            <input type="text"/>
                            <p>Общий объем в м<sup>3</sup></p>
                            <input type="text"/>
                            <p>Порядок оплаты</p>
                            <input type="text"/>
                            <p>Ответственность за утилизацию</p>
                            <input type="text"/>
                        </div>
                    </form>
                </div>
                <div className={s.form1__item}>
                    <form className={s.orderForm}>
                        <h1>Параметры заказа</h1>
                        <hr/>
                        <div>
                            <p>Дата заказа</p>
                            <input type="text"/>
                            <p>Номер смены <sup>(1-дневная, 2-ночная)</sup></p>
                            <input type="text"/>
                            <p>Объем заказа</p>
                            <input type="text"/>
                            <p>Цена единицы заказа без НДС</p>
                            <input type="text"/>
                            <button>
                                <div className={s.locButton}>
                                    <img src="location.png" alt=""/>
                                    <h3>Местоположение</h3>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={s.form2}>
                <div className={s.form2__item}>
                    <div className={s.form2__header}>
                        <h1>Параметры заказа</h1>
                        <hr/>
                    </div>
                    <div>
                        <form>
                            <div className={s.form2Input}>
                                <div className={s.form2Input__item}>
                                    <p>Объём приёмки заказа в м<sup>3</sup></p>
                                    <input type="text"/>
                                </div>
                                <div className={s.form2Input__item}>
                                    <p>Назначить мои самосвалы</p>
                                    <input type="text"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                <div className={s.form2__item}>
                        <div className={s.confirmVector}>
                            <input type="checkbox" id="confirm-vector" className={s.confirmCheckbox}/>
                            <label htmlFor="confirm-vector">Я согласен с параметрами заказа</label>
                        </div>
                    <div className={s.confirmBtn}>
                        <CommonButton color={'orange'} link={'/accept-order'} text={'Принять заказ'}/>
                    </div>
                    </div>
            </div>
        </div>
        <Support/>
    </div>
}

export default ConfirmOrder;