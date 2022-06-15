import React from 'react';

import { ReturnComponentType } from '../../types';

import styles from './Loading.module.scss';

export const Loading = (): ReturnComponentType => (
  <div className={styles.container}>
    <div className={styles.loader_three} />
  </div>
);
