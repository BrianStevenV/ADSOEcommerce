import Dashboard from "@/app/components/Dashboard"
import DashboardFilter from "@/app/components/DashboardFilter";

import styles from '../../../../styles/ProductDashboardPage.module.scss';

const shipmentInfo = [
    { IdOrder: 1, User: 1, Payment: 'Credit Card', Price: 199, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 2, User: 2, Payment: 'Paypal', Price: 1299, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 3, User: 3, Payment: 'Credit Card', Price: 999, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 4, User: 4, Payment: 'Paypal', Price: 299, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 5, User: 5, Payment: 'Credit Card', Price: 99, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 6, User: 6, Payment: 'Paypal', Price: 49, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 7, User: 7, Payment: 'Credit Card', Price: 29, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 8, User: 8, Payment: 'Paypal', Price: 299, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
    { IdOrder: 9, User: 9, Payment: 'Credit Card', Price: 999, Country: 'USA', Promotion: 'Free Shipping', Address: '1234 Main St, New York, NY 10001', PackUp: '/package icon 1.png', Deliver: '/deliver icon 1.png'},
]

const columns = [
    { label: 'Id Order', accessor: 'IdOrder', type: 'number' },
    { label: 'User', accessor: 'User', type: 'number' },
    { label: 'Payment', accessor: 'Payment', type: 'string' },
    { label: 'Price', accessor: 'Price', type: 'number' },
    { label: 'Country', accessor: 'Country', type: 'string' },
    { label: 'Promotion', accessor: 'Promotion', type: 'string' },
    { label: 'Address', accessor: 'Address', type: 'string' },
    { label: 'Pack Up', accessor: 'PackUp', type: 'image' },
    { label: 'Deliver', accessor: 'Deliver', type: 'image' },
];

function ShipmentDashboard() {
    return (
        <div>
            <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Shipment Dashboard</h1>
            <div className={styles.container__filter}>
                <DashboardFilter />
            </div>
                <Dashboard data={shipmentInfo} columns={columns}/>
        </div>
      )
}
export default ShipmentDashboard