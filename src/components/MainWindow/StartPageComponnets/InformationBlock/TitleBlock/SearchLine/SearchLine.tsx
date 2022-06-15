import React from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReturnComponentType } from '../../../../../../types';

import styles from './SearchLine.module.scss';

export const SearchLine = (): ReturnComponentType => (
  <div className={styles.searchLineWrapper}>
    <div className={styles.container}>
      <label className={styles.label} htmlFor="searchRegistry">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input
        id="searchRegistry"
        className={styles.search}
        type="text"
        placeholder="Искать реестр..."
      />
    </div>
    <button className={styles.searchLine__button} type="button">
      Искать
    </button>
  </div>
);
