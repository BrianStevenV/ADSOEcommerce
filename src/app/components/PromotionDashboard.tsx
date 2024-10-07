import { FC } from 'react';

import styles from '../../../styles/promotion/PromotionDashboard.module.scss';

interface Data {
    title: string;
    labelId: string; 
    buttonOk: string;
    buttonNot: string;
}

interface Props {
    data: Data
}

const PromotionDashboard: FC<Props> = ({ data }) => {
    return(
        <section className={styles.container}>

            <section>
                <div>
                    <h1>{data.title}</h1>
                </div>
                <div>
                    <label htmlFor=""> {data.labelId}</label>
                    <input type="text"  className={styles.input__labelId}/>
                </div>
                <div>
                    <label htmlFor="" > Description</label>
                    <input type="text" className={styles.input__description}/>
                </div>
            </section>

            <section>
                <button>{data.buttonNot}</button>
                <button>{data.buttonOk}</button>
            </section>

        </section>
        
    )
};

export default PromotionDashboard;