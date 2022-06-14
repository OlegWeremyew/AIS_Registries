import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './LowerLevel.module.scss';

export const LowerLevel = (): ReturnComponentType => (
  <div className={styles.lowerLevelWrapper}>
    <p className={styles.lowerLevel__text}>
      {' '}
      © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
    </p>
  </div>
);
