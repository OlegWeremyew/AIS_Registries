import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Search.module.scss';

export const Search = (): ReturnComponentType => (
  <input className={styles.search} type="text" placeholder="Поиск" />
);
