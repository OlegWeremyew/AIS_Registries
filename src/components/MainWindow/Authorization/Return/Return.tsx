import React from 'react';

import returnArrow from '../../../../assets/images/authirization/arrow-left.png';
import { ReturnComponentType } from '../../../../types';

import styles from './Return.module.scss';

export const Return = (): ReturnComponentType => (
  <div className={styles.returnWrapper}>
    <img className={styles.return__img} src={returnArrow} alt="return arrow" />
    <p className={styles.return__text}>Главная</p>
  </div>
);
