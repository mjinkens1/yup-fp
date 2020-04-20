import { map } from 'ramda';

// Constants
import { STRING } from '../../../constants';

// Functions
import { commonValidators, transform, validator } from '../common';
import { isOfType, validateType } from '../types';
import { roundTransform } from './transforms';
import {
  validateEmail,
  validateLength,
  validateMatches,
  validateMax,
  validateMin,
} from './validators';

const next = (validations, transforms) => {
  return stringValidators(validations, transforms);
};

const stringValidators = (validations, transforms) => {
  const applyValidations = func => func(next, validations);
  const commonValidatorFuncs = map(applyValidations, commonValidators);

  return {
    ...commonValidatorFuncs,
    email: email(validations, transforms),
    length: length(validations, transforms),
    matches: matches(validations, transforms),
    max: max(validations, transforms),
    min: min(validations, transforms),
    ensure: ensure(validations, transforms),
    lowercase: lowercase(validations, transforms),
    trim: trim(validations, transforms),
    uppercase: uppercase(validations, transforms),
    validations,
    transforms,
  };
};

const email = validator(next, 'email');
const length = validator(next, 'length');
const matches = validator(next, 'matches');
const max = validator(next, 'max');
const min = validator(next, 'min');
const ensure = transform(next, 'ensure');
const lowercase = transform(next, 'lowercase');
const trim = transform(next, 'trim');
const uppercase = transform(next, 'uppercase');

const stringActions = {
  email: validateEmail,
  length: validateLength,
  matches: validateMatches,
  max: validateMax,
  min: validateMin,
  string: validateType(String, STRING),
  round: roundTransform,
};

const string = isOfType(STRING, next);

export { string, stringActions };
