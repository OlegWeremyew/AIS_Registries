import { AppRootStateType } from 'reduxStore/types';
import { NewsListType } from 'reduxStore/newsReducer/types';

export const getNewsList = (state: AppRootStateType): NewsListType[] =>
  state.news.newsList;
