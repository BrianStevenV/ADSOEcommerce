import { FC } from 'react';
import Image from 'next/image';

import styles from '../../../styles/payment/CardPaymentMethod.module.scss';

interface PaymentMethod {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props {
    paymentMethods: PaymentMethod[];
}

const CardPaymentMethod: FC<Props> = ({ paymentMethods }) => {
    return(
        <div className={styles.card__container}>
            {paymentMethods.map((paymentMethod) => (
                <div key={paymentMethod.id} className={styles.card__container__details}>
                    <input type="radio" id={`paymentMethod-${paymentMethod.id}`} name='paymentMethod'/>
                    <label htmlFor={`paymentMethod-${paymentMethod.id}`} className={styles.label}>{paymentMethod.name}</label>
                    <Image
                        src={paymentMethod.imageUrl}
                        alt={paymentMethod.name}
                        width={300}
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardPaymentMethod;