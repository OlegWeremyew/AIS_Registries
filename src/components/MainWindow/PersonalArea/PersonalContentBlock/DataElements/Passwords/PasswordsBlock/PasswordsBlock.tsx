import React from 'react';

import { ReturnComponentType } from 'types';

import { Password } from './Password';
import styles from './PasswordsBlock.module.scss';

export const PasswordsBlock = (): ReturnComponentType => (
  <div className={styles.PasswordsBlockWrapper}>
    <Password label="Новый пароль" placeholder="**********" id="newPassword" />
    <Password label="Подтверждение пароля" id="passwordConfirmation" />
  </div>
);
