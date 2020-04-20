import { map } from 'ramda';

// Constants
import { NUMBER } from '../../constants';

// Functions
import { commonValidators, transform, validator } from '../common';
import { isOfType, validateType } from '../types';
import { roundTransform, truncateTransform } from './transforms';
import {
  validateGreaterThan,
  validateInteger,
  validateLessThan,
  validateMax,
  validateMin,
  validateNegative,
  validatePositive,
} from './validators';

const next = (validations, transforms) => {
  return numberValidators(validations, transforms);
};

const numberValidators = (validations, transforms) => {
  const applyValidations = func => func(next, validations);
  const commonValidatorFuncs = map(applyValidations, commonValidators);

  return {
    ...commonValidatorFuncs,
    greaterThan: greaterThan(validations, transforms),
    integer: integer(validations, transforms),
    lessThan: lessThan(validations, transforms),
    max: max(validations, transforms),
    min: min(validations, transforms),
    negative: negative(validations, transforms),
    positive: positive(validations, transforms),
    round: round(validations, transforms),
    truncate: truncate(validations, transforms),
    validations,
    transforms,
  };
};

const greaterThan = validator(next, 'greaterThan');
const integer = validator(next, 'integer');
const lessThan = validator(next, 'lessThan');
const max = validator(next, 'max');
const min = validator(next, 'min');
const negative = validator(next, 'negative');
const positive = validator(next, 'positive');
const round = transform(next, 'round');
const truncate = transform(next, 'truncate');

const numberActions = {
  greaterThan: validateGreaterThan,
  integer: validateInteger,
  lessThan: validateLessThan,
  max: validateMax,
  min: validateMin,
  negative: validateNegative,
  number: validateType(Number, NUMBER),
  positive: validatePositive,
  round: roundTransform,
  truncate: truncateTransform,
};

const number = isOfType(NUMBER, next);

export { number, numberActions };
