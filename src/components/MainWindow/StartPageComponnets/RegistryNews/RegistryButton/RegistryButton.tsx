import React, { FC } from 'react';

import { ReturnComponentType } from 'types';

import styles from './RegistryButton.module.scss';
import { RegistryButtonPropsType } from './types';

export const RegistryButton: FC<RegistryButtonPropsType> = ({
  text,
  changeVisibilityStatus,
}): ReturnComponentType => (
  <button
    onClick={changeVisibilityStatus}
    type="button"
    className={styles.registryButton}
  >
    {text}
  </button>
);
