import React from 'react';
import styles from './main.module.css';
import Card from './Card'

function MainBlock(props) {
  return (
  <div className={styles.mainblock}>
    <Card name = {props.name}/>  
  </div>
   
  );
}

export default MainBlock;
