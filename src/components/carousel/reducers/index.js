import { combineReducers } from 'redux';

import current from './current';
import direction from './direction';
import nSlides from './n-slides';
import rotationKeys from './rotation-keys';
import stepsToFinish from './steps-to-finish';
import target from './target';

export const INITIAL_STATE = {
  nSlides: 1,
  current: 0,
  target: 0,
  direction: 0,
  stepsToFinish: 0,
  rotationKeys: [0, 1, 2],
};

export default (state = INITIAL_STATE, action) => combineReducers({
  current: current(state.stepsToFinish, state.target),
  direction: direction(state.current, state.stepsToFinish),
  nSlides: nSlides,
  rotationKeys: rotationKeys(state.direction),
  stepsToFinish: stepsToFinish(state.current),
  target: target(state.current, state.nSlides),
})(state, action);

