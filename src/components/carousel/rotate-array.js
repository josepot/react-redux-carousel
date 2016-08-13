import R from 'ramda';

export default (array, direction) => array.map(
  (val, idx, values) => values[R.mathMod(idx + direction, array.length)]
);
