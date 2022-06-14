import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import { SearchLine } from './SearchLine';
import styles from './TitleBlock.module.css';

export const TitleBlock = (): ReturnComponentType => (
  <div className={styles.titleBlockWrapper}>
    <h1 className={styles.titleBlock__title}>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
    <p className={styles.titleBlock__text}>
      Единый реестр программ для электронных вычислительных машин и баз данных
    </p>
    <div>
      <p className={styles.titleBlock__text}>
        Включено ПО в реестр: <span className={styles.titleBlock__text__num}>13 438</span>
      </p>
      <p className={styles.titleBlock__text}>
        Правообладателей: <span className={styles.titleBlock__text__num}>4 272</span>
      </p>
    </div>
    <SearchLine />
  </div>
);
