import Image from "next/image";

import styles from '../../../styles/login/LoginPage.module.scss'

function LoginPage() {
  return (
    <div className={styles.container}>
        <figure className={styles.container__figure}>
            <Image src="/login.png" alt="Login" width={500} height={300} />
        </figure>
        <section className={styles.container__login}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.container__form}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input type="text" id="username" name="username" className={styles.input}/>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input type="password" id="password" name="password" className={styles.input}/>
                <button type="submit" className={styles.button__login}>Login</button>
            </form>

            <p>Or Sign Up</p>

            <button className={styles.button__google}>
                Google
            </button>
        </section>
    </div>
  )
}
export default LoginPage