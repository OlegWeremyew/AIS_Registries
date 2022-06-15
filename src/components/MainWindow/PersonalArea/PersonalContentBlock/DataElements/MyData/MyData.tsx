import React from 'react';

import { ReturnComponentType } from '../../../../../../types';

import { DataElements } from './DataElements';
import styles from './MyData.module.scss';

export const MyData = (): ReturnComponentType => (
  <div className={styles.myDataWrapper}>
    <h4 className={styles.myData__title}>Основные данные</h4>
    <DataElements />
  </div>
);
