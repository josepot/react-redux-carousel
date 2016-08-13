import { SLIDES_UPDATED } from '../actions';

export default (state = 1, { type, payload }) =>
  type === SLIDES_UPDATED ? payload.nSlides : state;

