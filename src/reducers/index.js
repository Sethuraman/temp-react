import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  // Add additional reducers here
  routing: routerReducer,
});

export default rootReducer;
