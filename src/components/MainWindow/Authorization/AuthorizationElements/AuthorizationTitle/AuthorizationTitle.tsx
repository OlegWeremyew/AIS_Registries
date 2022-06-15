import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './AuthorizationTitle.module.scss';

export const AuthorizationTitle = (): ReturnComponentType => (
  <h2 className={styles.title}>Авторизация</h2>
);
