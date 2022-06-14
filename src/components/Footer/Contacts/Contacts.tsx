import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Contacts.module.css';

export const Contacts = (): ReturnComponentType => (
  <div className={styles.contactsWrapper}>
    <h2 className={styles.contacts__title}>Контакты</h2>
    <div className={styles.contacts__data}>
      <p className={styles.contacts__phone}>+375 33 112 22 45</p>
      <p className={styles.contacts__phone}>+375 29 222 44 88</p>
      <p className={styles.contacts__email}>ReesrtPO@mail.ru</p>
      <address className={styles.contacts__address}>
        220004 г. Минск, ул. Карла Маркса, 38
      </address>
      <a className={styles.contacts__support} href="#">
        Cвязаться с поддержкой
      </a>
    </div>
  </div>
);
