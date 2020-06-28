import React from 'react';
import styles from './List.module.css';
import { green,red,orange } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export function List() {
    return (
        <>
             <div className={styles.listContainer}>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>
                        Stock&nbsp;<CheckCircleIcon fontSize="small" style={{ color: green[500] }} />
                    </span>
                    <span className={styles.listItemPrice}>Price 340$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 680$</span>
                    <span className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                        Add to Cart
                    </span>
                </div>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>
                        Stock&nbsp;<NotificationImportantIcon fontSize='small' style={{ color: orange[500] }} /><br />8 Tires Left</span>
                    <span className={styles.listItemPrice}>Price 740$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 1480$</span>
                    <span className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                        Add to Cart
                    </span>
                </div>
                <div className={styles.listItem}>
                    <a href='#' className={styles.listItemLink}>Continental Premium Contact</a>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' className={styles.listItemImg} />
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                    <span className={styles.listItemStock}>
                        Stock&nbsp;<CancelIcon fontSize="small" style={{ color: red[500] }} /><br />Back in 1 week</span>
                    <span className={styles.listItemPrice}>Price 900$</span>
                    <span className={styles.listItemQuantity}>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </span>
                    <span className={styles.listItemTotal}>Total 1800$</span>
                    <span className={styles.listItemCartButtonNotify}>
                    <NotificationsIcon fontSize='small' />
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