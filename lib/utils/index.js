import { compose, defaultTo, propEq } from 'ramda';

// Constants
import { INTERNAL } from '../constants';

export const asArray = value => [value];
export const isInternal = compose(propEq(INTERNAL, true), defaultTo({}));

export * from 'ramda';
