import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './RegistryButton.module.scss';

export const RegistryButton = (): ReturnComponentType => (
  <button type="button" className={styles.registryButton}>
    Показать все
  </button>
);
