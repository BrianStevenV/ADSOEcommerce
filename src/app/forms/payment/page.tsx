import CardPaymentMethod from "@/app/components/CardPaymentMethod"
import style from '../../../../styles/payment/PaymentMethodPage.module.scss';

const paymentsMethods = [
    {id: 1, name: 'Mastercard', imageUrl: '/mastercard.png'},
    {id: 2, name: 'Visa', imageUrl: '/visa.png'}
]

function PaymentMethodPage() {
  return (
    <div className={style.container}>
        <div className={style.container__h1}>
            <h1 className={style.title}>Select Payment Method</h1>
        </div>
        <div className={style.container__card__component}>
            <CardPaymentMethod paymentMethods={paymentsMethods}/>
        </div>
        
        <div className={style.container__button}>
            <button className={style.button}>Check</button>
        </div>
    </div>
  )
}
export default PaymentMethodPage