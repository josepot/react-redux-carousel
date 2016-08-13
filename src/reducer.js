import { combineReducers } from 'redux';
import reduxInternal from 'redux-internal-state';

export default combineReducers({
  statesOfMyComponents: reduxInternal('statesOfMyComponents'),
});
