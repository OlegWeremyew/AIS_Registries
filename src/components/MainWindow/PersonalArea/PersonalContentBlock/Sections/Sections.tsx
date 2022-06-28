import React from 'react';

import { ReturnComponentType } from 'types';

import { data } from './data';
import { Section } from './Section';
import styles from './Sections.module.scss';

export const Sections = (): ReturnComponentType => (
  <div className={styles.sectionWrapper}>
    {data.map(dataItem => (
      <Section key={dataItem.id} dataItem={dataItem} />
    ))}
  </div>
);
