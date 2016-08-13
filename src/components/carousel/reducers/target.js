import R from 'ramda';
import { MOVED_TO, NEXT, PREV } from '../actions';

export default (current, nSlides) => (state = 0, { type, payload }) => {
  switch (type) {
    case MOVED_TO: return payload.target;
    case NEXT: return (current + 1) % nSlides;
    case PREV: return R.mathMod(current - 1, nSlides);
    default: return state;
  };
};
