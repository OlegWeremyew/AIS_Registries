import React from 'react';

import { ReturnComponentType } from '../../../types';

import { Bell } from './Bell';
import { Calendar } from './Calendar';
import { Profile } from './Profile';
import styles from './ProfileAndNotifications.module.scss';

export const ProfileAndNotifications = (): ReturnComponentType => (
  <div className={styles.container}>
    <Calendar />
    <Bell />
    <Profile />
  </div>
);
