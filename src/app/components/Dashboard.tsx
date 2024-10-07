import { FC } from 'react';
import Image from 'next/image';

import styles from '../../../styles/dashboard/Dashboard.module.scss';

interface Column {
    label: string; 
    accessor: string;
    type: 'string' | 'number' | 'image';
}

interface DashboardProps {
    data: Record<string, any>[];
    columns: Column[];
}

const Dashboard: FC<DashboardProps> = ({ data, columns }) => {

    return(
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.accessor}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.accessor}>
                                    {column.type === 'image' ? (
                                        <Image
                                            src={row[column.accessor]}
                                            alt={column.label}
                                            className={styles.table__image}
                                            width={100}
                                            height={100}
                                        />
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default Dashboard;