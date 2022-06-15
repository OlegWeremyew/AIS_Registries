import React from 'react';

import logo from '../../../assets/images/header/logo.svg';
import { ReturnComponentType } from '../../../types';

import styles from './Logo.module.scss';

export const Logo = (): ReturnComponentType => (
  <div className={styles.logo}>
    <img src={logo} alt="Logo" />
  </div>
);

export default Logo;
