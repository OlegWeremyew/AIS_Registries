import React from 'react';

import { ReturnComponentType } from '../../../../../../types';

import { Password } from './Password';
import styles from './Passwords.module.scss';

export const Passwords = (): ReturnComponentType => (
  <div className={styles.passwordsWrapper}>
    <Password />
    <Password />
  </div>
);
