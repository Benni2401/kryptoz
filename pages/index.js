import Nav from "../components/nav";
import Head from 'next/head'
import Search from "../components/search";
import styles from "../styles/list.module.css"
import Clist from "../components/clist"
import { FiArrowDown } from "react-icons/fi";
import Footer from "../components/footer";
import { useState } from "react";

const List = ({filteredCoins, placeholder, type, onChange}) => {
    const [search, setSearch] = useState('')
    const allCoins = filteredCoins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        )
    const handleClick = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase())
    }
    return (
        
        <div>
            <Head>
                <title>Kryptoz List</title>
                <meta name="description" content="Kryptoz list where you find worldwide crypto tokens and coins in one platform." />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Nav/>
            <div className={styles.container}>
                <div className="left">
                    <Search type="text" placeholder="Bitcoin" onChange={handleClick}/>
                </div>
                <br/>
                <a href="#list" style={{textDecoration: "none"}}>
                    <div className={styles.button}>
                        <button>SEE LIST</button>    
                        <FiArrowDown/>
                    </div>
                </a>  
                <div className="right" id="list">
                    <Clist filteredCoins={allCoins}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=false')
    const filteredCoins = await res.json();     
    return{
        props:{
            filteredCoins        
        }
    }
}
 

export default List;
 
