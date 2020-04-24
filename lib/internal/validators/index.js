// Constants
import { EMAIL_REGEX } from '../../constants';

// Utils
import { compose, equals, length, test } from '../../utils';

const validator = predicate => (reference, message) => value =>
  predicate(value, reference) ? message : null;
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
  integer: () => () => null,
  length: (reference, message) => {
    return value => {
      return equals(length(value), reference) ? 'valid' : message;
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
  required: () => () => null,
};
