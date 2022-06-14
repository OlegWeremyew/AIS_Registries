import React from 'react';

import bell from '../../../../assets/images/header/bell.png';
import { ReturnComponentType } from '../../../../types';

import styles from './Bell.module.scss';

export const Bell = (): ReturnComponentType => (
  <div className={styles.bellWrapper}>
    <img src={bell} alt="bell" />
  </div>
);
