import React, { useState } from 'react';

import { ReturnComponentType } from '../../../../types';

import styles from './Profile.module.scss';
import { ProfileOpen } from './ProfileOpen';
import { ProfileToggle } from './ProfileToggle';

export const Profile = (): ReturnComponentType => {
  const [status, setStatus] = useState<boolean>(false);

  const changeStatus = (status: boolean): void => {
    setStatus(status);
  };

  return (
    <div className={styles.container}>
      {!status ? (
        <ProfileToggle status={status} setStatus={changeStatus} />
      ) : (
        <ProfileOpen status={status} setStatus={changeStatus} />
      )}
    </div>
  );
};
