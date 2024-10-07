import OrderResume from "@/app/components/OrderResume";
import ShipmentForm from "@/app/components/FormShipment";

const order = [
    { id: 1, name: 'Smartphone Pro Max', price: 999.99 },
    { id: 2, name: 'Camera Pro', price: 1299.99 },
    { id: 3, name: 'Smartwatch', price: 299.99 },
]

function ShipmentDashboard() {
  return (
    <div style={{marginLeft: '6rem', marginRight: '6rem'}}>
        <h1 style={{marginTop: '4rem', fontSize: '2.7rem'}}>Shipping Information</h1>
        <ShipmentForm />
        <OrderResume orderItem={order}/>
    </div>
  )
}
export default ShipmentDashboard;