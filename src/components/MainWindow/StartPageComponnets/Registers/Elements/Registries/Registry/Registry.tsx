import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../../../types';

import styles from './Registry.module.scss';
import { RegistryPropsType } from './types';

export const Registry: FC<RegistryPropsType> = ({ registry }): ReturnComponentType => (
  <div className={styles.registryWrapper}>
    <p className={styles.registry__registrationNumbers}>{registry.registrationNumbers}</p>
    <p className={styles.registry__softwareName}>{registry.softwareName}</p>
    <p className={styles.registry__classCode}>{registry.classCode}</p>
    <p className={styles.registry__softwareClass}>{registry.softwareClass}</p>
    <p className={styles.registry__registrationDate}>{registry.registrationDate}</p>
    <a className={styles.registry__websiteAddress} href={registry.websiteAddress}>
      Ссылка
    </a>
  </div>
);
