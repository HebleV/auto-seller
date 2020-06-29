import React from 'react';
import styles from './List.module.css';
import { green, red, orange } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export function List() {
    return (
        <div className={styles.listContainer}>
            <div className={styles.listItem1}>
                <div className={styles.listItemLink}>
                    <a href='#'>Continental Premium Contact</a>
                </div>
                <div className={styles.listItemImg}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' />
                </div>
                <div className={styles.listItemModel}>
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                </div>
                <div className={styles.listItemStock}>
                    <span>Stock&nbsp;<CheckCircleIcon fontSize="small" style={{ color: green[500] }} /></span>
                </div>
                <div className={styles.listItemPrice}>
                    <span>Price 740$</span>
                </div>
                <div className={styles.listItemQuantity}>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <div className={styles.listItemTotal}>
                    <span>Total 680$</span>
                </div>
                <div className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                    <span>
                        Add to Cart
                        </span>
                </div>
            </div>

            <div className={styles.listItem2}>
                <div className={styles.listItemLink}>
                    <a href='#'>Continental Premium Contact</a>
                </div>
                <div className={styles.listItemImg}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' />
                </div>
                <div className={styles.listItemModel}>
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                </div>
                <div className={styles.listItemStock}>
                    <span>Stock&nbsp;<CheckCircleIcon fontSize="small" style={{ color: green[500] }} /></span>
                </div>
                <div className={styles.listItemPrice}>
                    <span>Price 740$</span>
                </div>
                <div className={styles.listItemQuantity}>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <div className={styles.listItemTotal}>
                    <span>Total 680$</span>
                </div>
                <div className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                    <span>
                        Add to Cart
                        </span>
                </div>
            </div>

            <div className={styles.listItem3}>
                <div className={styles.listItemLink}>
                    <a href='#'>Continental Premium Contact</a>
                </div>
                <div className={styles.listItemImg}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' />
                </div>
                <div className={styles.listItemModel}>
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                </div>
                <div className={styles.listItemStock}>
                    <span>Stock&nbsp;<CheckCircleIcon fontSize="small" style={{ color: green[500] }} /></span>
                </div>
                <div className={styles.listItemPrice}>
                    <span>Price 740$</span>
                </div>
                <div className={styles.listItemQuantity}>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <div className={styles.listItemTotal}>
                    <span>Total 680$</span>
                </div>
                <div className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                    <span>
                        Add to Cart
                        </span>
                </div>
            </div>

            <div className={styles.listItem4}>
                <div className={styles.listItemLink}>
                    <a href='#'>Continental Premium Contact</a>
                </div>
                <div className={styles.listItemImg}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium bestseller' />
                </div>
                <div className={styles.listItemModel}>
                    <p className={styles.listItemModel}>195/55 R15 85V<br />SUV</p>
                </div>
                <div className={styles.listItemStock}>
                    <span>Stock&nbsp;<CheckCircleIcon fontSize="small" style={{ color: green[500] }} /></span>
                </div>
                <div className={styles.listItemPrice}>
                    <span>Price 740$</span>
                </div>
                <div className={styles.listItemQuantity}>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <div className={styles.listItemTotal}>
                    <span>Total 680$</span>
                </div>
                <div className={styles.listItemCartButton}>
                    <ShoppingCartIcon fontSize="small" />
                    <span>
                        Add to Cart
                        </span>
                </div>
            </div>
        </div>
    )
}