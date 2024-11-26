import Dashboard, { Column } from "@/app/components/Dashboard"
import DashboardFilter from "@/app/components/DashboardFilter";

import styles from '../../../../../styles/ProductDashboardPage.module.scss';

const orderHistoryInfo = [
    { id: 1, Product: 'Iphone 12', Price: 999, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 2, Product: 'Iphone 11', Price: 899, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 3, Product: 'Iphone 10', Price: 799, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 4, Product: 'Iphone 9', Price: 699, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 5, Product: 'Iphone 8', Price: 599, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 6, Product: 'Iphone 7', Price: 499, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'},
    { id: 7, Product: 'Iphone 6', Price: 399, OpenDate: '24/08/2024', FinishDate: '24/08/2024', Category: 'Electronics'}
]

const columns: Column[] = [
    { label: 'Id', accessor: 'id', type: 'number' },
    { label: 'Product', accessor: 'Product', type: 'string' },
    { label: 'Price', accessor: 'Price', type: 'number' },
    { label: 'Open Date', accessor: 'OpenDate', type: 'string' },
    { label: 'Finish Date', accessor: 'FinishDate', type: 'string' },
    { label: 'Category', accessor: 'Category', type: 'string' },
]

function OrderHistoryDashboard() {
    return (
        <div>
            <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Order History Dashboard</h1>
            <div className={styles.container__filter}>
                <DashboardFilter />
            </div>
                <Dashboard data={orderHistoryInfo} columns={columns}/>
        </div>
      )
}
export default OrderHistoryDashboard