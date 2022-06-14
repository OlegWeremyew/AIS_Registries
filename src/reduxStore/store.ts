import { combineReducers, createStore } from 'redux';

import { documentsReducer } from './documentsReducer';
import { registeredReducer } from './registeredRudecer';

export const rootReducer = combineReducers({
  registered: registeredReducer,
  documents: documentsReducer,
});

export const store = createStore(rootReducer);
