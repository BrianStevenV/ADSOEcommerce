import styles from "../../../styles/PageLayout.module.scss";

function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.container_header}>

            <div className={styles.container_logo}>
                <h1>Pour Maryam</h1>
            </div>
           
            <section className={styles.container_search_ul}>
                <div>
                    <input type="text" className={styles.search} placeholder="Search Here"/>
                </div>
                <ul className={styles.container_header_ul}>
                    <li>Offers</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Carrito Logo </li>
                    <li>Profile Logo</li>
                </ul>
            </section>
            
        </section>
        
        <section className={styles.container_subheader}>
            <ul className={styles.container_subheader_ul}>
                <li>Cameras</li>
                <li>Lens</li>
                <li>Ilumination</li>
                <li>Accesory</li>
                <li>Drones</li>
                <li>Tripods</li>
                <li>Filters</li>
                <li>Travelling</li>
            </ul>
        </section>
</header>
  )
}
export default Header