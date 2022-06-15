import React from 'react';

import doubleArrow from '../../../../../../../assets/images/startPageComponnets/registers/elements/doubleArrow.svg';
import { ReturnComponentType } from '../../../../../../../types';

import styles from './SoftwareName.module.scss';

export const SoftwareName = (): ReturnComponentType => (
  <div className={styles.softwareWrapper}>
    <img className={styles.software__img} src={doubleArrow} alt="double arrow" />
    <p className={styles.software__text}>Наименование программного обеспечения</p>
  </div>
);
