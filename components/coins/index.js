import Image from 'next/image'
import styles from '../coins/index.module.css'
import Link from 'next/link'


const Coins = ({name, symbol, id, image, price, priceChange}) => {

    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
                <div className={styles.coin}>
                    <div className={styles.mainDiv}>
                        <div className={styles.mainHeader}>
                                <img src={image} width={30} height={30}/>
                                <h1>
                                    {name}
                                </h1>
                            </div>
                            <p className={styles.p}>{symbol}</p>
                    </div>
                        
                        <div className={styles.Center}>
                            <span>$ {price}</span>
                            {priceChange < 0 ? (
                                <strong className={styles.Cred}> {priceChange.toFixed(2)} %   👎</strong>
                            ):(
                                <strong className={styles.Cgreen}> +{priceChange.toFixed(2)} % 👍 </strong>
                            )
                            }
                        </div>
                </div>
            </a>
        </Link>
    );
}

export default Coins;