import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './TechnicalSupport.module.css';

export const TechnicalSupport = (): ReturnComponentType => (
  <div className={styles.supportWrapper}>
    <h2 className={styles.support__title}>Техническая поддержка</h2>
    <div className={styles.support__data}>
      <p className={styles.support__data__text}>
        Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и
        праздничных дней.
      </p>
      <div className={styles.support__data__contacts}>
        <p className={styles.support__data__contacts__item}>+375 25 111 22 33</p>
        <p className={styles.support__data__contacts__item}>+375 29 222 44 55</p>
        <p className={styles.support__data__contacts__item}>ReestrPOsupport@mail.ru</p>
      </div>
    </div>
  </div>
);
