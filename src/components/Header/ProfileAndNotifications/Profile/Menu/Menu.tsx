import React, { FC } from 'react';

import arrowDown from '../../../../../assets/images/header/arrowDown.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './Menu.module.scss';

export type MenuPropsType = {
  setStatus: (status: boolean) => void;
  status: boolean;
};

export const Menu: FC<MenuPropsType> = ({ setStatus, status }): ReturnComponentType => (
  <div onClick={() => setStatus(!status)} className={styles.menuWrapper}>
    <img className={styles.menu__image} src={arrowDown} alt="arrow down" />
  </div>
);
