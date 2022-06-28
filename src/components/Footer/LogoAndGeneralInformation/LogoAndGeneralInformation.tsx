import React from 'react';

import { ReturnComponentType } from 'types';

import { Developer } from './Developer';
import { Logo } from './Logo';
import styles from './LogoAndGeneralInformation.module.scss';

export const LogoAndGeneralInformation = (): ReturnComponentType => (
  <div className={styles.blockWrapper}>
    <Logo />
    <Developer />
  </div>
);
