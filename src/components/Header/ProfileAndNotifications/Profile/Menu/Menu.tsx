import React from 'react';

import arrowDown from '../../../../../assets/images/header/arrowDown.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './Menu.module.scss';

export const Menu = (): ReturnComponentType => (
  <div className={styles.menuWrapper}>
    <img className={styles.menu__image} src={arrowDown} alt="arrow down" />
  </div>
);
