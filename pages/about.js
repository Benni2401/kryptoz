import Nav from "../components/nav";
import Head from 'next/head'
import One from '../assets/bitcoin.svg'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/footer";

const About = () => {
    return (
        
        <div>
            <Head>
                <title>Kryptoz Introduction</title>
                <meta name="description" content="If you wanna know about Kryptoz, visit this page to know about us and our coins listing." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>
            <div className={styles.about}>
                <div className={styles.left}>
                    <h1>
                        Kryptoz Introduction
                    </h1>
                    <p>A Cryptocurrency Market Data Website.</p>
                    <span>Kryptoz has been developed and designed by <b>Muhammad Faiz Khan</b>. It's providing <br/>market
                        data in click. You can filter out a coin you're holding and analyse the updated data which <br/> 
                        is fetching  directly from <a href="https://coingecko.com" target="_blank">Coin Geecko</a>. Its' a simple idea to share
                        crypto currency market <br/>value and ranking. You can start supporting <b>Kryptoz</b> to get more features like crypto<br/>
                        wallet and trading exchange in the future.
                    </span>
                </div>
                <div className="right">
                    <Image src={One} width={480}/>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default About;