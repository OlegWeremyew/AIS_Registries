import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../../../types';

import styles from './NoAccount.module.scss';

export const NoAccount = (): ReturnComponentType => (
  <div className={styles.noAccountWrapper}>
    <p className={styles.noAccount__text}>У вас нет аккаунта?</p>
    <NavLink to="" className={styles.noAccount__link}>
      Нажмите сюда чтобы создать
    </NavLink>
  </div>
);
