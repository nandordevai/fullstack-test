import Image from 'next/image'
import styles from './page.module.scss'
import form from '../form.module.scss'

export default function Login() {
    return (
        <main className={styles.login}>
            <Image src="/badge-colored.svg" width={75} height={48} alt="Logo"></Image>
            <h1 className={styles.loginTitle}>Bejelentkezés</h1>
            <form action="/api/login" method="POST" className={styles.loginForm}>
                <div className={styles.loginForm__row}>
                    <label className={form.fieldLabel} htmlFor="email">E-mail cím:</label>
                    <input type="text" name="email" id="email"></input>
                </div>
                <div className={styles.loginForm__row}>
                    <label className={form.fieldLabel} htmlFor="password">Jelszó:</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <div className={`${styles.loginForm__row} ${styles['loginForm__row--inline']}`}>
                    <input type="checkbox" name="savesession" id="savesession"></input>
                    <label htmlFor="savesession">Emlékezzen rám</label>
                </div>
                <input type="submit" value="Bejelentkezés"></input>
            </form>
        </main>
    )
}
