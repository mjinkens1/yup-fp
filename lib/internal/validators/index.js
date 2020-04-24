// Utils
import * as U from '../../utils';

// email: 'email',
// greaterThan: 'greaterThan',
// integer: 'integer',
// length: 'length',
// lessThan: 'lessThan',
// matches: 'matches',
// max: 'max',
// min: 'max',
// negative: 'negative',
// of: 'of',
// positive: 'positive',
// ref: 'ref',
// required: 'required'

// lowercase: 'lowercase',
// round: 'round',
// trim: 'trim',
// truncate: 'truncate',
// uppercase: 'uppercase',
// ensure: 'ensure',

export const validators = {
  email: () => () => null,
  greaterThan: () => () => null,
  integer: message => value => (Number.isInteger(value) ? 'valid' : message),
  length: (reference, message) => {
    return value => {
      return U.equals(U.length(value), reference) ? 'valid' : message;
    };
  },
  lessThan: () => () => null,
  matches: () => () => null,
  max: () => () => null,
  min: () => () => null,
  negative: () => () => null,
  of: () => () => null,
  positive: () => () => null,
  ref: () => () => null,
  required: message => {
    return value => {
      return U.not(U.isNil(value)) ? 'valid' : message;
    };
  },
};
