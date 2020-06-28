import React from 'react';
import { Bestseller } from '../Bestseller/Bestseller';
import { List } from '../List/List';
import { LoadItems } from '../LoadItems/LoadItems';
import styles from './Sort.module.css';

export function Sort() {
    return (
        <div className={styles.listContainer}>
            <p className={styles.title}>Recommended Products</p>
            <span className={styles.filters}>Selected Filters</span>
            <div className={styles.sort}>
                <label for="sort">Sort by:</label>
                <select name="cars" id="cars">
                    <option value="Popularity">Popularity</option>
                    <option value="Premium">Premium</option>
                    <option value="Economical">Economical</option>
                </select>
            </div>
            <Bestseller />
            <List />
            <LoadItems />
        </div>
    )
}