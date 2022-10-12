import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import projectReducer from './projectReducer';
import userReducer from '../users.js/userReducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

export const allReducers = combineReducers({
  auth: userReducer,
  projects: projectReducer,
});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
