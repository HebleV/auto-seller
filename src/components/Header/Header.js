import React from 'react';
import styles from './Header.module.css';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export function Header() {
    return (
        <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='auto seller' />
                </div>
                <div className={styles.search}>
                    <input type='text' size='60' placeholder='Search' />
                </div>
                <div className={styles.menus}>
                    <a href='#' className={styles.navlink} style={{textAlign:'center'}}><PersonIcon style={{ fontSize: 20 }} /><br/><span>Account</span></a>
                    <a href='#' className={styles.navlink} style={{textAlign:'center'}}><DescriptionIcon style={{ fontSize: 20 }} /><br/><span>Orders</span></a>
                    <a href='#' className={styles.navlink} style={{textAlign:'center'}}><ShoppingCartIcon style={{ fontSize: 20 }} /><br/><span>Cart</span></a>
                </div>
        </div>
    );
}
