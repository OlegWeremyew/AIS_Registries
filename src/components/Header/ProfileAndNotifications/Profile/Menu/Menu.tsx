import React, { FC } from 'react';

import arrowDown from 'assets/images/header/arrowDown.svg';
import { ReturnComponentType } from 'types';

import styles from './Menu.module.scss';
import { MenuPropsType } from './types';

export const Menu: FC<MenuPropsType> = ({ setStatus, status }): ReturnComponentType => (
  <div onClick={() => setStatus(!status)} className={styles.menuWrapper}>
    <img className={styles.menu__image} src={arrowDown} alt="arrow down" />
  </div>
);
