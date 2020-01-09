import counterReducer from './counter';
import loggedReducer from './isLogged';
import otherProjects from './otherProjects';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  projects: otherProjects,
});

export default allReducers;
