import s from "./MyDumps.module.css"
import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";
import Header from "../LittleComponents/Header/Header";
import PlusButton from "../LittleComponents/Buttons/PlusButton/PlusButton";
import '../../App.css';
import PointButton from "../LittleComponents/Buttons/PointButton/PointButton";
import DumpInfo from "./DumpInfo/DumpInfo";
import Support from "../Support/Support";
import CommonButton from "../LittleComponents/Buttons/CommonButton/CommonButton";

const MyDumps = (props) => {
    return <div>
        <CommonHeader/>
        <Header text={'Мои самосвалы'}/>
        <div className={s.mainContainer}>
            <div className={s.container}>
                <h1>Зарегистрированные самосвалы</h1>
                <hr/>
                <div>
                    <div className={s.containerBlocks}>
                        <button>
                            <PlusButton color={'gray'}/>
                        </button>
                        <DumpInfo/>
                        <DumpInfo/>
                        <DumpInfo/>
                        <DumpInfo/>
                        <button>
                            <PointButton color={'gray'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.registerBtn}>
            <CommonButton color={'orange'} link={'/register-dump'} text={'Зарегистрировать новый самосвал'}/>
        </div>
        <Support/>
    </div>
}
export default MyDumps;