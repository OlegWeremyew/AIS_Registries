import React from 'react';

import {
  Documents,
  InformationBlock,
  Registers,
  RegistryNews,
} from '../../components/MainWindow';
import { ReturnComponentType } from '../../types';

import styles from './StartPage.module.css';

const StartPage = (): ReturnComponentType => (
  <main className={styles.startPageWrapper}>
    <InformationBlock />
    <Registers />
    <RegistryNews />
    <Documents />
  </main>
);

export default StartPage;
