// Constants
import { STRING } from '../../../constants';

// Functions
import { commonValidators, nextFunc, transformer, validator } from '../common';
import { isOfType, validateType } from '../types';
import {
  ensureTransform,
  lowercaseTransform,
  trimTransform,
  uppercaseTransform,
} from './transformers';
import {
  validateEmail,
  validateLength,
  validateMatches,
  validateMax,
  validateMin,
} from './validators';

// Utils
import { map } from '../../utils';

const validators = (validations, transforms) => {
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

const next = nextFunc(validators);

const email = validator(next, 'email');
const length = validator(next, 'length');
const matches = validator(next, 'matches');
const max = validator(next, 'max');
const min = validator(next, 'min');
const ensure = transformer(next, 'ensure');
const lowercase = transformer(next, 'lowercase');
const trim = transformer(next, 'trim');
const uppercase = transformer(next, 'uppercase');

const stringValidators = {
  email: validateEmail,
  length: validateLength,
  matches: validateMatches,
  max: validateMax,
  min: validateMin,
  string: validateType(String, STRING),
};

const stringTransforms = {
  ensure: ensureTransform,
  lowercase: lowercaseTransform,
  trim: trimTransform,
  uppercase: uppercaseTransform,
};

const string = isOfType(STRING, next);

export { string, stringTransforms, stringValidators };
