import styles from './index.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer>
                <abbr style={{textDecoration: 'none'}} title="Muhammad Faiz Khan"><p>&copy; <a href="/"><b> Kryptoz </b></a> 2021</p></abbr>
            </footer>
        </div>
    );
}

export default Footer;