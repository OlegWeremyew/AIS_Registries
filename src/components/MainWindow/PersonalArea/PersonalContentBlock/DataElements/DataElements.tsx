import React from 'react';

import { ReturnComponentType } from '../../../../../types';

import styles from './DataElements.module.scss';
import { DataLine } from './DataLine';
import { Greetings } from './Greetings';
import { MyData } from './MyData';
import { Passwords } from './Passwords';
import { SaveDataButton } from './SaveDataButton';

export const DataElements = (): ReturnComponentType => (
  <div className={styles.dataElementWrapper}>
    <Greetings />
    <DataLine />
    <MyData />
    <DataLine />
    <Passwords />
    <DataLine />
    <SaveDataButton />
  </div>
);
