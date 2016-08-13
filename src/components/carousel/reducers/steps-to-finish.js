import { MOVED_TO, NEXT, PREV, TRANSITION_ENDED } from '../actions';

export default current => (state = 0, { type, payload }) => {
  switch (type) {
    case MOVED_TO: return Math.abs(payload.target - current);
    case NEXT:
    case PREV: return 1;
    case TRANSITION_ENDED: return state - 1;
    default: return state;
  };
};

