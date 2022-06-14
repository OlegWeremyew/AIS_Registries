import React from 'react';

import { ReturnComponentType } from '../../../../../../types';

import styles from './SearchLine.module.scss';

export const SearchLine = (): ReturnComponentType => (
  <div className={styles.searchLineWrapper}>
    <input
      className={styles.searchLine__input}
      type="text"
      placeholder="Искать реестр..."
    />
    <button className={styles.searchLine__button} type="button">
      Искать
    </button>
  </div>
);
