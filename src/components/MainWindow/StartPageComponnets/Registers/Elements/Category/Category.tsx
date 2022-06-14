import React from 'react';

import { ReturnComponentType } from '../../../../../../types';

import styles from './Category.module.scss';
import { RegistrationNumbers } from './RegistrationNumbers';
import { SoftwareName } from './SoftwareName';

export const Category = (): ReturnComponentType => (
  <div className={styles.categoryWrapper}>
    <RegistrationNumbers />
    <SoftwareName />
    <p>Код класса</p>
    <p>Класс программного обеспечения</p>
    <p>Дата регистрации</p>
    <p>Адрес сайта</p>
  </div>
);
