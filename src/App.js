import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './components/Header.js'
import MainBlock from './components/MainBlock.js'
import Footer from './components/Footer.js'
import  styles from './components/main.module.css';


function App() {
  const userName = 'Andrii Udot'
  return (
    <div className={styles.wrapper}>
      <Header name = {userName}/>
      <MainBlock name = {userName}/>
      <Footer />
    </div>
  );
}

export default App;
