import Dashboard, { Column } from "@/app/components/Dashboard"
import DashboardAddProductButton from "@/app/components/DashboardAddProductButton";
import DashboardFilter from "@/app/components/DashboardFilter";

import styles from '../../../../styles/ProductDashboardPage.module.scss';

const productInfo = [
    { idProduct: 1, User: 22, Product: 'XL Tripod', Price: 199, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Tripod', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 2, User: 22, Product: 'Camera Pro', Price: 1299, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Camera', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 3, User: 22, Product: 'Smartphone Pro Max', Price: 999, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Smartphone', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 4, User: 22, Product: 'Smartwatch', Price: 299, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Smartwatch', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 5, User: 22, Product: 'Headphone', Price: 99, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Headphone', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 6, User: 22, Product: 'Keyboard', Price: 49, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Keyboard', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 7, User: 22, Product: 'Mouse', Price: 29, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Mouse', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 8, User: 22, Product: 'Monitor', Price: 299, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Monitor', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 9, User: 22, Product: 'Laptop', Price: 999, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Laptop', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
    { idProduct: 10, User: 22, Product: 'Tablet', Price: 399, OpenDate: '24/08/2024', Promotion: 'True', Category: 'Tablet', Update: '/edit icon 1.png', Delete: '/delete icons 1.png'},
];

const columns: Column[] = [
    { label: 'Id Product', accessor: 'idProduct', type: 'number' },
    { label: 'User', accessor: 'User', type: 'number' },
    { label: 'Product', accessor: 'Product', type: 'string' },
    { label: 'Price', accessor: 'Price', type: 'number' },
    { label: 'Open Date', accessor: 'OpenDate', type: 'string' },
    { label: 'Promotion', accessor: 'Promotion', type: 'string' },
    { label: 'Category', accessor: 'Category', type: 'string' },
    { label: 'Update', accessor: 'Update', type: 'image' },
    { label: 'Delete', accessor: 'Delete', type: 'image' },
];


function ProductDashboard() {
  return (
    <div>
        <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>Product Dashboard</h1>
        <div className={styles.container__filter}>
            <DashboardFilter />
            <DashboardAddProductButton />
        </div>
            <Dashboard data={productInfo} columns={columns}/>
    </div>
  )
}
export default ProductDashboard