import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './Header.module.scss';
import { Logo } from './Logo';
import { ProfileAndNotifications } from './ProfileAndNotifications';
import { Search } from './Search';

export const Header = (): ReturnComponentType => (
  <header className={styles.headerWrapper}>
    <Logo />
    <Search />
    <ProfileAndNotifications />
  </header>
);
