import React from 'react';

import { ReturnComponentType } from '../../../../../../types';

import styles from './Passwords.module.scss';
import { PasswordsBlock } from './PasswordsBlock';

export const Passwords = (): ReturnComponentType => (
  <div className={styles.passwordsWrapper}>
    <h3 className={styles.passwords__title}>Пароль</h3>
    <PasswordsBlock />
  </div>
);
