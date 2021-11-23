import Nav from "../../components/nav";
import styles from './id.module.css';
import Head from 'next/head'


const ID = ({coin}) => {

    return (
        <div>
            <Head>
                <title>{coin.name} | {coin.description.en}</title>
                <meta name="description" content="Kryptoz list where you find worldwide crypto tokens and coins in one platform." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>
            <br/>
            <div className={styles.mainH}>
                <h1>Market Information :</h1>
                <br/>
                <div className={styles.Rank}>
                        <strong>
                            Rank
                        </strong>
                        <p>{coin.market_cap_rank}</p>
                </div>    
                <br/>
                <div className={styles.Headings}>
                    <img src={coin.image.small} width={50} height={50}/>
                    <h1>
                        {coin.name}
                    </h1>
                    <div className={styles.HeadingMiddle}>
                        <strong>
                                <span> Volume 24H </span>
                        </strong>
                        <br/>
                        <span>$ {coin.market_data.total_volume.usd}</span>
                    </div>                    
                </div>
                <div className={styles.Middle}>
                    <div className={styles.MiddleOne}>
                        <strong>
                            <span> Market Cap </span>
                        </strong>
                        <p>$ {coin.market_data.market_cap.usd}</p>
                    </div>
                    <div className={styles.MiddleTwo}>
                        <strong>
                            <span> Price </span>
                        </strong>
                        <p>$ {coin.market_data.current_price.usd}</p>
                    </div>
                    <div className={styles.MiddleThree}>
                        <strong>
                            <span> Symbol </span>
                        </strong>
                        <p>{coin.symbol}</p>
                    </div>
                </div>    
                <a href={coin.links.blockchain_site} target="_blank">
                    <p>{coin.description.en}</p>
                </a>
                <a href="/">
                    <button>SEE MORE COINS</button>
                </a>
            </div>
        </div>
    );
}

export default ID;


export async function getServerSideProps(context){
    const {id} = context.query
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await response.json();
    return {
        props:{
            coin: data
        }
    }
}
