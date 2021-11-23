import styles from './index.module.css';
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react';

const Search = ({filteredCoins,placeholder, type, onChange}) => {

    return (
        <div className={styles.main}>
            <h1>Search For Leading <br/> Cryptocurrencies In One Platform.</h1>
            <p>Get the latest crypto market, updates, and reports by searching in <b>Kryptoz</b>.</p>
            <form action="/">
                <div className={styles.input}>
                    <input type={type} placeholder={placeholder} onChange={onChange}/>
                </div>
                <div className={styles.button}>
                    <button type="submit">
                        <FiSearch size={20}/>
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Search;

