import React from 'react';

import { Footer, Header, Routers } from '../components';
import { ReturnComponentType } from '../types';

import styles from './App.module.css';

const App = (): ReturnComponentType => (
  <div className={styles.appWrapper}>
    <Header />
    <Routers />
    <Footer />
  </div>
);

export default App;
