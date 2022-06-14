import React from 'react';

import ThreeDOfficeWork from '../../../../../assets/images/startPageComponnets/information/3dOfficeWork.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './InformationImg.module.scss';

export const InformationImg = (): ReturnComponentType => (
  <img className={styles.information__img} src={ThreeDOfficeWork} alt="3d Office Work" />
);
