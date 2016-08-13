import R from 'ramda';
import rotateArray from './rotate-array';
import { createSelector, createStructuredSelector } from 'reselect';

const TOTAL_TRANSITION_TIME = 0.5;

const getNSlides = R.path(['instance', 'nSlides']);
const getCurrentSlide = R.path(['instance', 'current']);
const getTargetSlide = R.path(['instance', 'target']);
const getDirection = R.path(['instance', 'direction']);
const getStepsToFinish = R.path(['instance', 'stepsToFinish']);
const getRotationKeys = R.path(['instance', 'rotationKeys']);

const getDistance = createSelector(
  [getCurrentSlide, getTargetSlide, getDirection, getNSlides],
  (current, target, direction, nSlides) => R.compose(
    R.mathMod(R.__, nSlides),
    R.multiply(direction),
    R.subtract(target)
  )(current)
);

const getRelativeDistance = createSelector(
  [getDistance, getStepsToFinish, getDirection],
  (distance, stepsToFinish, direction) => (distance - stepsToFinish) * direction
);

const getCenterSlide = createSelector(
  [getCurrentSlide, getRelativeDistance], R.add
);

const getLeftSlide = createSelector(
  [getCenterSlide, getDirection],
  (centerSlide, direction) =>
    direction === 1 ? centerSlide + 2 : centerSlide - 1
);

const getRightSlide = createSelector(
  [getCenterSlide, getDirection],
  (centerSlide, direction) =>
    direction === -1 ? centerSlide - 2 : centerSlide + 1
);

const getRelevantSlidesIndexes = createSelector(
  [getLeftSlide, getCenterSlide, getRightSlide, getNSlides],
  (left, center, right, nSlides) => [left, center, right]
    .map(R.mathMod(R.__, nSlides))
);

const getRelevantSlidesPositions = createSelector(
  [getDirection], direction => rotateArray([-1, 0, 1], direction * -1)
);

const getRelevantSidlesTransitions = createSelector(
  [getRelevantSlidesPositions],
  positions => positions.map(
    (val, idx) => (idx === 1 && val !== 0) || (idx !== 1 && val === 0) ? 1 : 0
  )
);

const getTransitionDuration = createSelector(
  [getDistance], R.divide(TOTAL_TRANSITION_TIME)
);

const getRelevantSlides = createSelector(
  [
    getRelevantSlidesIndexes, getRelevantSlidesPositions,
    getRelevantSidlesTransitions, getRotationKeys, getTransitionDuration
  ],
  (ids, positions, transitions, rotationKeys, transitionDuration) => {
    const result = ids.map((id, idx) => ({
      id,
      position: positions[idx],
      transitionDuration: transitions[idx] ? transitionDuration + 's' : undefined,
      transitionProperty: transitions[idx] ? 'left' : undefined,
    }));
    return rotationKeys.map(key => result[key]);
  }
);

export default createStructuredSelector({
  relevantSlides: getRelevantSlides,
  activeSlide: getCenterSlide,
});
