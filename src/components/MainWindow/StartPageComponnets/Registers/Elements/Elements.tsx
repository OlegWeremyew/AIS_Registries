import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import { Category } from './Category';
import styles from './Elements.module.css';
import { Registries } from './Registries';

export const Elements = (): ReturnComponentType => (
  <div className={styles.elementWrapper}>
    <Category />
    <Registries />
  </div>
);
