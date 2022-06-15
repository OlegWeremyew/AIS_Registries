import React from 'react';

import { ReturnComponentType } from '../../../../../../../types';

import styles from './DataElements.module.scss';
import { DataInput } from './DataInput';

export const DataElements = (): ReturnComponentType => (
  <div className={styles.dataRowWrapper}>
    <DataInput value="Захар" id="name" label="Имя" />
    <DataInput value="Палазник" id="surname" label="Фамилия" />
    <DataInput value="Геннадьевич" id="fatherName" label="Отчество" />
  </div>
);
