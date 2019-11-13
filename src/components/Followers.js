import React from 'react';
import styles from './main.module.css';


function Followers(props) {
  return (
    <div className={styles.followers}>
      <div className={styles.folowitem}>
        <p>5656</p>
        <p>Followers</p>
      </div>
      <div className={styles.folowitem}>
        <p>565</p>
        <p>Following</p>
      </div>
    </div>
  );
}

export default Followers;
