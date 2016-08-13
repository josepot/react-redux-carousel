export const MOVED_TO = 'MOVED_TO';
export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const TRANSITION_ENDED = 'TRANSITION_ENDED';
export const SLIDES_UPDATED = 'SLIDES_UPDATED';

export const actionCreators = {
  onMoveTo: (target, direction) =>
    ({ type: MOVED_TO, payload: { target, direction } }),
  onNext: () => ({ type: NEXT }),
  onPrev: () => ({ type: PREV }),
  onTransitionEnd: () => ({ type: TRANSITION_ENDED }),
  onSlidesUpdat: () => ({ type: SLIDES_UPDATED }),
};
