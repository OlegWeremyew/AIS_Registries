import React from 'react';

import { Footer, Header, Routers } from '../components';
import { ReturnComponentType } from '../types';

import styles from './App.module.scss';

const App = (): ReturnComponentType => (
  <div className={styles.appWrapper}>
    <React.Suspense>
      <Header />
      <Routers />
      <Footer />
    </React.Suspense>
  </div>
);

export default App;
