import React from 'react';
import styles from './LoadItems.module.css';

export function LoadItems() {
    return (
        <div className={styles.container}>
            <span className={styles.loader}>Load More Results</span>
        </div>
    )
}