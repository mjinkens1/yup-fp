import { apply, compose, defaultTo, propEq, tail } from 'ramda';

// Constants
import { INTERNAL } from '../constants';

export const asArray = (...args) => args;
export const isInternal = compose(propEq(INTERNAL, true), defaultTo({}));
export const tailArgs = (...args) => tail(args);
export const unaryN = (n, f) => {
  return (...args) => apply(f, [args[n - 1]]);
};

export * from 'ramda';
