import Coins from "./coins/index";
import styles from "./clist.module.css"


const Clist = ({filteredCoins}) => {
    return (
        <div className={styles.main}>
            <div className={styles.coinsHeader}>
                <strong>
                    Coin Name
                </strong>
                <strong>
                    Coin Price
                </strong>
                <strong>
                    Price Change 24H
                </strong>
            </div>
            <div className={styles.coinsMain}>
                {filteredCoins.map(coin => {
                    return <Coins
                            key={coin.id}
                            name={coin.name}
                            id={coin.id}
                            symbol={coin.symbol}
                            marcap={coin.market_cap}
                            image={coin.image}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h} 
                    />
                })}
            </div>
            <br/>
     
        </div>
    );
}

export default Clist;