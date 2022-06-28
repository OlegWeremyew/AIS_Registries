import React from 'react';

import footerLogo from 'assets/images/header/logo.svg';
import { ReturnComponentType } from 'types';

import styles from './Logo.module.scss';

export const Logo = (): ReturnComponentType => (
  <div className={styles.footerLogoWrapper}>
    <img className={styles.footerLogo__img} src={footerLogo} alt="footer logo" />
    <p className={styles.footerLogo__text}>
      Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта
      2014 г
    </p>
  </div>
);
