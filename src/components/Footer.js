import React from 'react';
import styles from './main.module.css';
import img from './images/310.png'

function Footer(props) {
  return (
    <footer className={styles.footerblock}>
    <address> Kharkiv city</address>
    <img src={img} alt=""></img>
    <a href="mailto:ask@htmlbook.ru">udot_a@ukr.net</a>
</footer>
  );
}

export default Footer;
