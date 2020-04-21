// Constants
import { NUMBER } from '../../constants';

// Functions
import { validateType } from '../types';
import { roundTransform, truncateTransform } from './transformers';
import {
  validateGreaterThan,
  validateInteger,
  validateLessThan,
  validateMax,
  validateMin,
  validateNegative,
  validatePositive,
  validateRequired,
} from './validators';

// Utils
import { transform, validation } from '../../utils';

// Apply action types to generic action functions
const greaterThan = validation('greaterThan');
const integer = validation('integer');
const lessThan = validation('lessThan');
const max = validation('max');
const min = validation('min');
const required = validation('required');
const negative = validation('negative');
const positive = validation('positive');
const round = transform('round');
const truncate = transform('truncate');

const numberValidators = {
  greaterThan: validateGreaterThan,
  integer: validateInteger,
  lessThan: validateLessThan,
  max: validateMax,
  min: validateMin,
  negative: validateNegative,
  number: validateType(Number, NUMBER),
  positive: validatePositive,
  required: validateRequired,
};

const numberTransformers = {
  round: roundTransform,
  truncate: truncateTransform,
};

const number = (message, actions) => ({ message, actions });

export {
  number,
  numberTransformers,
  numberValidators,
  greaterThan,
  integer,
  lessThan,
  max,
  min,
  required,
  negative,
  positive,
  round,
  truncate,
};
