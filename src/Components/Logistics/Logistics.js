import s from './Logistics.module.css'
import CommonHeader from "../CommonHeader/CommonHeader";
import Header from "../LittleComponents/Header/Header";
import LogisticItem from "./LogisticItem/LogisticItem";
import PointButton from "../LittleComponents/Buttons/PointButton/PointButton";
import '../../App.css'
import CommonButton from "../LittleComponents/Buttons/CommonButton/CommonButton";
import Support from "../Support/Support";

const Logistics = (props) => {
    return <div>
        <CommonHeader/>
        <Header text={'Мои перевозки'}/>
        <div className={s.mainContainer}>
            <div className={s.container}>
                <h1>Доступные заказы</h1>
                <hr/>
                <div className={s.containerBlocks}>
                    <LogisticItem/>
                    <LogisticItem/>
                    <LogisticItem/>
                    <LogisticItem/>
                    <LogisticItem/>
                    <LogisticItem/>
                    <button>
                        <PointButton color={'gray'}/>
                    </button>
                </div>
            </div>
            <CommonButton color={'orange'} link={'story-transportations'} text={'История перевозок'}/>
        </div>
        <Support/>
    </div>
}

export default Logistics;