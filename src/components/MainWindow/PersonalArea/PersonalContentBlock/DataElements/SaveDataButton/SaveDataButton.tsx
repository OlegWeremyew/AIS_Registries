import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './SaveDataButton.module.scss';

export const SaveDataButton = (): ReturnComponentType => (
  <button className={styles.buttonWrapper} type="button">
    Сохранить
  </button>
);
