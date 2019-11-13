import React from 'react';
import styles from './main.module.css';
import img from './images/252.png'
function Avatar(props) {
  return (
    <div className={styles.avatar}>
    <img src={img} alt="avatar"></img>
</div>
   
  );
}

export default Avatar;
