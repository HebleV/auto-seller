import React from 'react';
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='auto seller' />
                </div>
                <div className={styles.search}>
                    <input type='text' size='70' placeholder='Search' className={styles.search} />
                </div>
                <div className={styles.menus}>
                    <span>Account</span>
                    <span>Orders</span>
                    <span>Cart</span>
                </div>
        </div>
    );
}
