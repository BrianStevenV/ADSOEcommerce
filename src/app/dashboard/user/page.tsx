import Dashboard from "@/app/components/Dashboard"
import DashboardFilter from "@/app/components/DashboardFilter";

import styles from '../../../../styles/ProductDashboardPage.module.scss';

const userInfo = [
    { id: 1, TypeUser: 1, Status: 'Active', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 2, TypeUser: 2, Status: 'Inactive', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 3, TypeUser: 3, Status: 'Active', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 4, TypeUser: 4, Status: 'Inactive', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 5, TypeUser: 5, Status: 'Active', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 6, TypeUser: 6, Status: 'Inactive', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'},
    { id: 7, TypeUser: 7, Status: 'Active', OpenAccount: '24/08/2024', LastConnection: '24/08/2024', Country: 'USA', Enable: '/enable icon 1.png', Disable: '/disable icon 1.png'}
]

const columns = [
    { label: 'Id', accessor: 'id', type: 'number' },
    { label: 'Type User', accessor: 'TypeUser', type: 'number' },
    { label: 'Status', accessor: 'Status', type: 'string' },
    { label: 'Open Account', accessor: 'OpenAccount', type: 'string' },
    { label: 'Last Connection', accessor: 'LastConnection', type: 'string' },
    { label: 'Country', accessor: 'Country', type: 'string' },
    { label: 'Enable', accessor: 'Enable', type: 'image' },
    { label: 'Disable', accessor: 'Disable', type: 'image' },

]

function UserDashboard() {
    return (
        <div>
            <h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center',margin: '4rem' }}>User Dashboard</h1>
            <div className={styles.container__filter}>
                <DashboardFilter />
            </div>
                <Dashboard data={userInfo} columns={columns}/>
        </div>
      )
}
export default UserDashboard;