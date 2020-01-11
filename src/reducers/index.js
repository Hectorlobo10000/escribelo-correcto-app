import counterReducer from './counter';
import loggedReducer from './isLogged';
import otherProjectsReducer from './otherProjects';
import routesReducer from './routes';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  projects: otherProjectsReducer,
  routes: routesReducer,
});

export default allReducers;
