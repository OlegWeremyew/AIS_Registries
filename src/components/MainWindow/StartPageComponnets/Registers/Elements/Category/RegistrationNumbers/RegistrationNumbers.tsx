import React from 'react';

import doubleArrow from '../../../../../../../assets/images/startPageComponnets/registers/elements/doubleArrow.png';
import { ReturnComponentType } from '../../../../../../../types';

import styles from './RegistrationNumbers.module.css';

export const RegistrationNumbers = (): ReturnComponentType => (
  <div className={styles.registrationWrapper}>
    <img className={styles.registration__img} src={doubleArrow} alt="double arrow" />
    <p className={styles.registration__text}>Регистрационный номер</p>
  </div>
);
