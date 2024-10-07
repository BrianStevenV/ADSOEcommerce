import styles from "../../../styles/PageLayout.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
        <section>
            <h1>Pour Maryam</h1>
        </section>
        <section>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Policy Privacity</li>
                <li>Information</li>
                <li>Subscribe</li>
            </ul>
        </section>
    </div>
  )
}
export default Footer