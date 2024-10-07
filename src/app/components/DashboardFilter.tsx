import styles from '../../../styles/dashboard/DashboardFilter.module.scss';

const DashboardFilter = () => {
    return(
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.label}>Filter by: </label>
            <input type="text" className={styles.input} />
        </div>
    );
};

export default DashboardFilter;