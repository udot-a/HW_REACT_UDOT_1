import React from 'react';
import styles from './main.module.css';
import Avatar from './Avatar'
import Followers from './Followers'

function Card(props) {
    return (
        <div className={styles.card}>
            <h1 className="profilename">{props.name} Profile</h1>
            <Avatar />
            <Followers />
        </div>
    );
}

export default Card;
