import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './PersonalTitle.module.scss';

export const PersonalTitle = (): ReturnComponentType => (
  <h2 className={styles.personalTitle}>Личный кабинет</h2>
);
