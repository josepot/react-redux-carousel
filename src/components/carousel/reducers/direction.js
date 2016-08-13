import { MOVED_TO, NEXT, PREV, TRANSITION_ENDED } from '../actions';

export default (current, stepsToFinish) => (state = 0, { type, payload }) => {
  switch (type) {
    case MOVED_TO: return payload.target > current ? 1 : -1;
    case NEXT: return 1;
    case PREV: return -1;
    case TRANSITION_ENDED: return stepsToFinish === 1 ? 0 : state;
    default: return state;
  };
};
