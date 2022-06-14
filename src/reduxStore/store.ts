import { combineReducers, createStore } from 'redux';

import { registeredReducer } from './registeredRudecer';

export const rootReducer = combineReducers({
  registered: registeredReducer,
});

export const store = createStore(rootReducer);
