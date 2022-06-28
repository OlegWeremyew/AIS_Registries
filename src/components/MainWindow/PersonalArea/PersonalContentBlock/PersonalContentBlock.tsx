import React from 'react';

import { ReturnComponentType } from 'types';

import { DataElements } from './DataElements';
import styles from './PersonalContentBlock.module.scss';
import { Sections } from './Sections';

export const PersonalContentBlock = (): ReturnComponentType => (
  <div className={styles.personalContentWrapper}>
    <Sections />
    <DataElements />
  </div>
);
