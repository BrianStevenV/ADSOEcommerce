import Dashboard from "@/app/components/Dashboard"
import DashboardFilter from "@/app/components/DashboardFilter";

import styles from '../../../../styles/ProductDashboardPage.module.scss';

const stockInfo = [
    { id: 1, Product: 'XL Tripod', Price: 199, OpenDate: '24/08/2024', Amount: 10, Category: 'Tripod', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 2, Product: 'Camera Pro', Price: 1299, OpenDate: '24/08/2024', Amount: 10, Category: 'Camera', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 3, Product: 'Smartphone Pro Max', Price: 999, OpenDate: '24/08/2024', Amount: 10, Category: 'Smartphone', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 4, Product: 'Smartwatch', Price: 299, OpenDate: '24/08/2024', Amount: 10, Category: 'Smartwatch', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 5, Product: 'Headphone', Price: 99, OpenDate: '24/08/2024', Amount: 10, Category: 'Headphone', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 6, Product: 'Keyboard', Price: 49, OpenDate: '24/08/2024', Amount: 10, Category: 'Keyboard', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 7, Product: 'Mouse', Price: 29, OpenDate: '24/08/2024', Amount: 10, Category: 'Mouse', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 8, Product: 'Monitor', Price: 299, OpenDate: '24/08/2024', Amount: 10, Category: 'Monitor', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
    { id: 9, Product: 'Laptop', Price: 999, OpenDate: '24/08/2024', Amount: 10, Category: 'Laptop', Add: '/add icon 1.png', Substraction: '/substraction icon 1.png'},
];

const columns = [
    { label: 'Id', accessor: 'id', type: 'number' },
    { label: 'Product', accessor: 'Product', type: 'string' },
    { label: 'Price', accessor: 'Price', type: 'number' },
    { label: 'Open Date', accessor: 'OpenDate', type: 'string' },
    { label: 'Amount', accessor: 'Amount', type: 'number' },
    { label: 'Category', accessor: 'Category', type: 'string' },
    { label: 'Add', accessor: 'Add', type: 'image' },
    { label: 'Substraction', accessor: 'Substraction', type: 'image' },
];

function StockDashboard() {
    return (
        <div>
            <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Stock Dashboard</h1>
            <div className={styles.container__filter}>
                <DashboardFilter />
            </div>
                <Dashboard data={stockInfo} columns={columns}/>
        </div>
      )
}
export default StockDashboard