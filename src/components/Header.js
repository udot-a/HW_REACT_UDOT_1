import React from 'react';
import  styles from './main.module.css';

function Header(props) {
  return (
    <header className={styles.headerblock}>
        <h1>{props.name}</h1> 
    </header>
  );
}

export default Header;
