import { combineReducers, createStore } from 'redux';

import { documentsReducer } from './documentsReducer';
import { newsReducer } from './newsReducer';
import { questionsReducer } from './questionReducer';
import { registeredReducer } from './registeredRudecer';

export const rootReducer = combineReducers({
  registered: registeredReducer,
  documents: documentsReducer,
  news: newsReducer,
  questions: questionsReducer,
});

export const store = createStore(rootReducer);
