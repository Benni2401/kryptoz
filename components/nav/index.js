import List from "../../pages";
import styles from "../nav/index.module.css"
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <a href="/">Kryptoz</a>
                </div>
                <div className={styles.right}>
                    <ul className="desktop-menu">
                        <li>
                            <a className="link" href="/">Kryptoz List</a>
                        </li>
                        <li>
                        <a className="link" href="/about">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;