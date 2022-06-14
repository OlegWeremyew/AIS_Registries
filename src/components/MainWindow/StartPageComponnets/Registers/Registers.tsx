import React from 'react';

import { ReturnComponentType } from '../../../../types';

import { Paginator } from './Paginator';
import styles from './Registers.module.css';
import { TitleAndFilter } from './TitleAndFilter';

export const Registers = (): ReturnComponentType => (
  <section className={styles.registersWrapper}>
    <TitleAndFilter />
    <Paginator />
  </section>
);
