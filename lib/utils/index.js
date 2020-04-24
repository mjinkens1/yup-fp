import { compose, defaultTo, propEq } from 'ramda';

// Constants
import { INTERNAL } from '../constants';

export const isInternal = compose(propEq(INTERNAL, true), defaultTo({}));

export * from 'ramda';
