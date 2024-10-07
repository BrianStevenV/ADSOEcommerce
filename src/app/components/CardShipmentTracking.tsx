import { FC } from 'react';
import styles from '../../../styles/shipment/CardShipmentTracking.module.scss';
import Image from 'next/image';

interface Shipment {
    id: string;
    status: string;
    date: string;
}

interface Props {
    shipments: Shipment[];
}

const ShipmentTracking: FC<Props> = ({ shipments }) => {
    return (
        <section className={styles.card__container}>
            {shipments.map((shipment) => (
                <div key={shipment.id} className={styles.card__container__details}>
                    <h1 className={styles.shipment__title}>Shipment: {shipment.id}</h1>
                    <figure className={styles.shipment__figure__container}>
                        <Image
                            src="/shipment box icon 1.png"
                            alt="Shipment Tracking"
                            width={100}
                            height={100}
                        />
                        <figcaption className={styles.shipment__figcaption}>More Details +</figcaption>
                    </figure>
                    <p className={styles.shipment__date}>Date: {shipment.date}</p>
                    <p className={`${styles.shipment__status} ${styles[shipment.status.replace(" ", "")]}`}>
                        {shipment.status}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default ShipmentTracking;
