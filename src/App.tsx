import React from 'react';
import styles from './App.module.scss';
import Layout from './Components/Layout/Layout';
import Routers from './Routers/Routers';



function App() {
  return (
    <div className={styles['*']}>
      <Routers />
      <Layout />
    </div>
  );
}

export default App;
