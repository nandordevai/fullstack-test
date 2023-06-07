import Image from 'next/image'
import styles from './page.module.scss'

export default function Login() {
    return (
        <main className={styles.login}>
            <Image src="/badge-colored.svg" width={75} height={48} alt="Logo"></Image>
            <h1 className={styles.loginTitle}>Bejelentkezés</h1>
            <form class={styles.loginForm}>
                <label for="email">E-mail cím:</label>
                <input type="text" name="email" id="email"></input>
                <label for="password">Jelszó:</label>
                <input type="text" name="password" id="password"></input>
                <input type="checkbox" name="savesession" id="savesession"></input>
                <label for="savesession">Emlékezzen rám</label>
                <input type="submit" value="Bejelentkezés"></input>
            </form>
        </main>
    )
}
