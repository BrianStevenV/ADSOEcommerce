import { FC } from 'react';
import Image from 'next/image';

import styles from '../../../styles/purchase/PurchaseReport.module.scss';

interface Purchase {
    id: string;
    date: string;
}

interface Props {
    purchases: Purchase[];
}

const PurchaseReport: FC<Props> = ({ purchases }) => {
    return(
        <section className={styles.card__container}>
            {purchases.map((purchase) => (
                <div key={purchase.id} className={styles.card__container__details}>
                    <h1 className={styles.purchase__title}>Purchase: {purchase.id}</h1>
                    <figure className={styles.purchase__figure__container}>
                        <Image
                            src="/checklist 1.png"
                            alt="Purchase Report"
                            width={100}
                            height={100}
                        />
                        <figcaption className={styles.purchase__figcaption}>More Details +</figcaption>
                    </figure>
                    <p className={styles.purchase__date}>Date: {purchase.date}</p>
                </div>
            ))}
        </section>
    );
};

export default PurchaseReport;