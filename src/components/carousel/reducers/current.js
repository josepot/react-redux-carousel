import { TRANSITION_ENDED } from '../actions';

export default (stepsToFinish, target) => (state = 0, { type }) =>
  type === TRANSITION_ENDED && stepsToFinish === 1 ? target : state;
