import React from 'react';
import styles from './Bestseller.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container, Col, Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function Bestseller() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{borderTop:'1px solid #000'}}>
            <Grid container spacing={1} className={styles.bestsellerContainer} >
                <Grid container item xs={12} sm={12} lg={5} md={5} style={{ backgroundColor: '#fff', padding: '1%' }} className={styles.bestsellerItems}>
                    <Grid item lg={4} sm={6} className={styles.itemDetails}>
                        <img src='https://dummyimage.com/130x130/9c949c/9c949c.png' alt='premium bestseller' />
                    </Grid>
                    <Grid item lg={8} md={8} xs={6} sm={6}>
                        <Grid item lg={12}>
                            <a href='#' className={styles.bestsellerItemLink}>Continental Premium Contact</a>
                        </Grid>
                        <Grid container item lg={12} md={12} xs={12} sm={12}>
                            <Grid item lg={3} sm={6} xs={6}>
                                <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium' />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6}>
                                <p className={styles.listItemModel}>195/55 R15<br />SUV</p>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4} className={styles.listItemStock}>
                                <span>Stock</span>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4} className={styles.listItemPrice}>
                                <span>Price<br /><b>340$</b></span>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <span>Total<br /><b>$ 1360</b></span>
                            </Grid>
                        </Grid>
                        <Grid container item lg={12} md={12} xs={12} sm={12} className={styles.itemQty}>
                            <Grid item lg={6} md={6} xs={6} sm={6}>
                                <span className={styles.listItemQuantity}>
                                    <span>-</span>
                                    <span>0</span>
                                    <span>+</span>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} xs={6} sm={6}>
                                <span className={styles.listItemCartButton}>
                                    <ShoppingCartIcon fontSize="small" />
                                    <span>Add to Cart</span>
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={1} md={1} className={styles.hideItems}>&nbsp;</Grid>
                <Grid lg={1} md={1} className={styles.hideItems}>&nbsp;</Grid>
                <Grid container item xs={12} md={5} sm={12} lg={5} style={{ backgroundColor: '#fff', padding: '1%' }} className={styles.bestsellerItems}>
                    <Grid item lg={4} sm={6} className={styles.itemDetails}>
                        <img src='https://dummyimage.com/130x130/9c949c/9c949c.png' alt='premium bestseller' />
                    </Grid>
                    <Grid item lg={8} md={8} xs={6} sm={6}>
                        <Grid item lg={12} md={12}>
                            <a href='#' className={styles.bestsellerItemLink}>Continental Premium Contact</a>
                        </Grid>
                        <Grid container item lg={12} md={12} xs={12} sm={12}>
                            <Grid item lg={3} sm={6} xs={6}>
                                <img src='https://dummyimage.com/60x50/9c949c/9c949c.png' alt='premium' />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6}>
                                <p className={styles.listItemModel}>195/55 R15<br />SUV</p>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4} className={styles.listItemStock}>
                                <span>Stock</span>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4} className={styles.listItemPrice}>
                                <span>Price<br /><b>340$</b></span>
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <span>Total<br /><b>$ 1360</b></span>
                            </Grid>
                        </Grid>
                        <Grid container item lg={12} md={12} xs={12} sm={12} className={styles.itemQty}>
                            <Grid item lg={6} md={6} xs={6} sm={6}>
                                <span className={styles.listItemQuantity}>
                                    <span>-</span>
                                    <span>0</span>
                                    <span>+</span>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} xs={6} sm={6}>
                                <span className={styles.listItemCartButton}>
                                    <ShoppingCartIcon fontSize="small" />
                                    <span>Add to Cart</span>
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}


 