import React from 'react';

import { ReturnComponentType } from '../../../../types';

import styles from './InformationBlock.module.css';
import { InformationImg } from './InformationImg';
import { TitleBlock } from './TitleBlock';

export const InformationBlock = (): ReturnComponentType => (
  <section className={styles.informationWrapper}>
    <TitleBlock />
    <InformationImg />
  </section>
);
