import { initialNewsState } from 'reduxStore/newsReducer/newsReducer/newsReducer';
import { newsAction } from 'reduxStore/newsReducer';
import { InferActionTypes } from 'reduxStore/types';

export type NewsInitialType = typeof initialNewsState;
export type NewsActionTypes = InferActionTypes<typeof newsAction>;

export type NewsListType = {
  id: string;
  title: string;
  addedTime: string;
  description: string;
  img: string;
};
