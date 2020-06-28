import React from 'react';
import styles from './Bestseller.module.css';

export function Bestseller() {
    return (
        <>
            <div className={styles.bestsellerContainer}>
                <div className={styles.premium}>
                    <img src='https://dummyimage.com/130x130/9c949c/9c949c.png' alt='premium bestseller' />
                </div>
                <div className={styles.economy}>
                    <img src='https://dummyimage.com/130x130/9c949c/9c949c.png' alt='economy bestseller' />
                </div>
            </div>
        </>
    )
}