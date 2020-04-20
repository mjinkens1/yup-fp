// Constants
import { NUMBER } from '../../constants';

// Functions
import { commonActions, nextFunc, transform, validation } from '../common';
import { isOfType, validateType } from '../types';
import { roundTransform, truncateTransform } from './transformers';
import {
  validateGreaterThan,
  validateInteger,
  validateLessThan,
  validateMax,
  validateMin,
  validateNegative,
  validatePositive,
} from './validators';

// Utils
import { map } from '../../utils';

const next = nextFunc(actionSpecifiers);

const greaterThan = validation(next, 'greaterThan');
const integer = validation(next, 'integer');
const lessThan = validation(next, 'lessThan');
const max = validation(next, 'max');
const min = validation(next, 'min');
const negative = validation(next, 'negative');
const positive = validation(next, 'positive');
const round = transform(next, 'round');
const truncate = transform(next, 'truncate');

/*
    Set of functions that when called specify which validations and transformations
    are to be applied to the field value. Calling the function will add its action
    type to the validations or transforms list, then pass the updated lists to the next 
    function in the schema's validation chain, or return the lists from the last function
    in the chain.
*/
const actionSpecifiers = (validations, transforms) => {
  const applyValidations = func => func(next, validations);
  const commonActionsFuncs = map(applyValidations, commonActions);

  return {
    ...commonActionsFuncs,
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

const numberValidators = {
  greaterThan: validateGreaterThan,
  integer: validateInteger,
  lessThan: validateLessThan,
  max: validateMax,
  min: validateMin,
  negative: validateNegative,
  number: validateType(Number, NUMBER),
  positive: validatePositive,
};

const numberTransformers = {
  round: roundTransform,
  truncate: truncateTransform,
};

const number = isOfType(NUMBER, next);

export { number, numberTransformers, numberValidators };
