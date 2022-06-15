import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../../types';

import style from './AdditionalAuthorization.module.scss';
import { AdditionalItem } from './AdditionalItem';
import { AdditionalAuthorizationPropsType } from './types';

export const AdditionalAuthorization: FC<AdditionalAuthorizationPropsType> = ({
  text1,
  text2,
}): ReturnComponentType => (
  <div className={style.additionalWrapper}>
    <AdditionalItem text={text1} />
    <AdditionalItem text={text2} />
  </div>
);
