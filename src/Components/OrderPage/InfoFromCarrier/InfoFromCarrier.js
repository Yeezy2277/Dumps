import s from './InfoFromCarrier.module.css'

const InfoFromCarrier = (props) => {
    return <div>
        <div className={s.container}>
            <div className={s.block1}>
                <p>{props.info}</p>
            </div>
            <div className={s.block2}>
                <p>{props.number}</p>
            </div>
        </div>
    </div>
}

export default InfoFromCarrier;