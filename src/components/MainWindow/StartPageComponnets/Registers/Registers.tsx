import React from 'react';

import { ReturnComponentType } from 'types';

import { Elements } from './Elements';
import { Paginator } from './Paginator';
import styles from './Registers.module.scss';
import { TitleAndFilter } from './TitleAndFilter';

export const Registers = (): ReturnComponentType => (
  <section className={styles.registersWrapper}>
    <TitleAndFilter />
    <Elements />
    <Paginator />
  </section>
);
