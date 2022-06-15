import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './Checkbox.module.scss';

export const Checkbox = (): ReturnComponentType => (
  <div className={styles.checkboxWrapper}>
    <input className={styles.checkbox__input} type="checkbox" id="rememberMe" />
    <label className={styles.checkbox__label} htmlFor="rememberMe">
      Запомнить меня на этом компьютере
    </label>
  </div>
);
