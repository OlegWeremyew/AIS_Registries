import React from 'react';

import { useSelector } from 'react-redux';

import { getNewsList } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types';

import { Registry } from './Registry';
import { RegistryButton } from './RegistryButton';
import styles from './RegistryNews.module.scss';

export const RegistryNews = (): ReturnComponentType => {
  const newsList = useSelector(getNewsList);
  return (
    <div className={styles.registryNewsWrapper}>
      <h2 className={styles.registryNews__title}>Новости реестра</h2>
      <div className={styles.registryBlock}>
        {newsList.map(mewsItem => (
          <Registry key={mewsItem.id} mewsItem={mewsItem} />
        ))}
      </div>
      <RegistryButton />
    </div>
  );
};
