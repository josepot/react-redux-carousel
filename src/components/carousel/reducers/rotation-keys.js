import { TRANSITION_ENDED } from '../actions';
import rotateArray from '../rotate-array';

export default direction => (state = [0, 1, 2], { type }) =>
  type === TRANSITION_ENDED ? rotateArray(state, direction * -1) : state;
