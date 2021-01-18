import s from './History.module.css';
import CommonHeader from "../CommonHeader/CommonHeader";
import Header from "../LittleComponents/Header/Header";
import HistoryInfoBlock from "./HistoryInfoBlock/HistoryInfoBlock";
import Support from "../Support/Support";

const History = (props) => {
    return <div>
        <CommonHeader/>
        {props.person === 'carrier'? <Header text={`История перевозок`}/> : <Header text={`История заказов`}/>}
        <div className={s.container}>
            <div className={s.block}>
                <h1>За текущий месяц</h1>
                <hr/>
                <div className={s.containerInfoBlocks}>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                    <HistoryInfoBlock textButton={'Срок истек'}/>
                </div>
            </div>
            <div className={s.block}>
                <h1>За прошлый месяц</h1>
                <hr/>
                <div className={s.containerInfoBlocks}>
                    <HistoryInfoBlock/>
                    <HistoryInfoBlock/>
                    <HistoryInfoBlock/>
                    <HistoryInfoBlock/>
                    <HistoryInfoBlock/>
                    <HistoryInfoBlock/>
                </div>
            </div>
        </div>
        <Support/>
    </div>
}

export default History