import React from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReturnComponentType } from 'types';

import styles from './Search.module.scss';

export const Search = (): ReturnComponentType => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor="searchHeader">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </label>
    <input id="searchHeader" className={styles.search} type="text" placeholder="Поиск" />
  </div>
);
