import React from 'react';

import {
  Documents,
  InformationBlock,
  QuestionAnswer,
  Registers,
  RegistryNews,
} from 'components';
import { ReturnComponentType } from 'types';

import styles from './StartPage.module.scss';

const StartPage = (): ReturnComponentType => (
  <main className={styles.startPageWrapper}>
    <InformationBlock />
    <Registers />
    <RegistryNews />
    <Documents />
    <QuestionAnswer />
  </main>
);

export default StartPage;
