import React from 'react';

import { InformationBlock, Registers } from '../../components/MainWindow';
import { ReturnComponentType } from '../../types';

import styles from './StartPage.module.css';

const StartPage = (): ReturnComponentType => (
  <main className={styles.startPageWrapper}>
    <InformationBlock />
    <Registers />
  </main>
);

export default StartPage;
