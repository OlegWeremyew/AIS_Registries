import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './App.module.scss';
import { Loading } from 'common/Loading';
import { Header, Routers, Footer } from 'components';

export const App = (): ReturnComponentType => (
  <div className={styles.appWrapper}>
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Routers />
      <Footer />
    </React.Suspense>
  </div>
);
