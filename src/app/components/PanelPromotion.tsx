import { FC } from 'react';
import styles from '../../../styles/promotion/PanelPromotion.module.scss';

interface Data {
    id: number[];
    label: string;
    input?: string;
}

interface Props {
    data: Data;
}

const PanelPromotion: FC<Props> = ({ data }) => {
    return(
        <div className={styles.petitionsContainer}>
            <h2 className={styles.title}>{data.label}</h2>
            {data.input && (
                <input type="text" className={styles.promotionInput}/>
            )}
            <ul className={styles.petitionsList}>
                {data.id.map((id) => (
                    <li key={id} className={styles.petitionItem}>{id}</li>
                ))}
            </ul>
        </div>
    );
}

export default PanelPromotion;