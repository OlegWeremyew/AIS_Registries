import React from 'react';

import leftDarkArrow from '../../../../../assets/images/startPageComponnets/registers/paginator/leftDarkArrow.png';
import leftGrayArrow from '../../../../../assets/images/startPageComponnets/registers/paginator/leftGrayArrow.png';
import rightDarkArrow from '../../../../../assets/images/startPageComponnets/registers/paginator/rightDarkArrow.png';
import { ReturnComponentType } from '../../../../../types';

import styles from './Paginator.module.css';
import { PaginatorButton } from './PaginatorButton';
import { UpperArrows } from './UpperArrows';
import { UpperDoubleArrows } from './UpperDoubleArrows';

export const Paginator = (): ReturnComponentType => (
  <div className={styles.paginatorWrapper}>
    <UpperDoubleArrows contentFirst={leftGrayArrow} contentSecond={leftGrayArrow} />
    <UpperArrows content={leftDarkArrow} />
    <PaginatorButton content="1" setStyle />
    <PaginatorButton content="2" />
    <PaginatorButton content="3" />
    <PaginatorButton content="4" />
    <PaginatorButton content="5" />
    <PaginatorButton content="..." />
    <PaginatorButton content="112" />
    <PaginatorButton content="113" />
    <UpperArrows content={rightDarkArrow} />
    <UpperDoubleArrows contentFirst={rightDarkArrow} contentSecond={rightDarkArrow} />
  </div>
);
