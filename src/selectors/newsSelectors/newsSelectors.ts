import { NewsListType } from '../../reduxStore/newsReducer/types';
import { AppRootStateType } from '../../reduxStore/types';

export const getNewsList = (state: AppRootStateType): NewsListType[] =>
  state.news.newsList;
