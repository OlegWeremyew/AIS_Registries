import React from 'react';

import logo from '../../../assets/images/header/logo.png';
import { ReturnComponentType } from '../../../types';

import styles from './Logo.module.css';

export const Logo = (): ReturnComponentType => (
  <div className={styles.logo}>
    <img src={logo} alt="Logo" />
  </div>
);

export default Logo;
