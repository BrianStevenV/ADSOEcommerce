import { FC } from 'react';
import styles from '../../../styles/shipment/ResumeOrder.module.scss';

interface OrderItem {
  id: number;
  name: string;
  price: number;
}

interface Props {
  orderItem: OrderItem[];
}

const ResumeOrder: FC<Props> = ({ orderItem }) => {
  const totalPrice = orderItem.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = 30;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className={styles['resume-order']}>
      <h2 className={styles['resume-order-title']}>Resume Order</h2>
      <ul className={styles['resume-title']}>
        {orderItem.map((item) => (
          <li key={item.id} className={styles['order-item']}>
            <span className={styles['item-name']}>{item.name}</span>
            <span className={styles['item-price']}>${item.price.toFixed(2)}</span>
          </li>
        ))}
        <li className={`${styles['order-item']} ${styles.shipping}`}>
          <span className={styles['item-name']}>Shipment</span>
          <span className={styles['item-price']}>${shippingCost.toFixed(2)}</span>
        </li>
      </ul>
      <div className={styles.total}>
        <span className={styles['total-label']}>Total:</span>
        <span className={styles['total-price']}>${grandTotal.toFixed(2)}</span>
      </div>
      <button className={styles['buy-now-button']}>Buy Now</button>
    </div>
  );
};

export default ResumeOrder;