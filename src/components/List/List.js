import React from 'react';
import styles from './List.module.css';

export function List() {
    return (
        <>
             <div className={styles.listContainer}>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>Stock</span>
                    <span className={styles.listItemPrice}>Price 340$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 680$</span>
                    <span className={styles.listItemCartButton}>
                        Add to Cart
                    </span>
                </div>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>Stock<br />8 Tires Left</span>
                    <span className={styles.listItemPrice}>Price 740$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 1480$</span>
                    <span className={styles.listItemCartButton}>
                        Add to Cart
                    </span>
                </div>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>Stock<br />Back in 1 week</span>
                    <span className={styles.listItemPrice}>Price 900$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 1800$</span>
                    <span className={styles.listItemCartButtonNotify}>
                        Notify Me
                    </span>
                </div>
            </div>
        </>
    )
}
// onClick={decrementQty()}
// onClick={decrementQty()}
// onClick={incrementQty()}