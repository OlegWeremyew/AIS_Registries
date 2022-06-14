import { InferActionTypes } from '../../types';
import { newsAction } from '../newsAction';
import { initialNewsState } from '../newsReducer/newsReducer';

export type NewsInitialType = typeof initialNewsState;
export type NewsActionTypes = InferActionTypes<typeof newsAction>;

export type NewsListType = {
  id: string;
  title: string;
  addedTime: string;
  description: string;
  img: string;
};
