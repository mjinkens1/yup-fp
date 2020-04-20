// Constants
import { STRING } from '../../../constants';

// Functions
import { commonActions, nextFunc, transform, validation } from '../common';
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

const next = nextFunc(actions);

const email = validation(next, 'email');
const length = validation(next, 'length');
const matches = validation(next, 'matches');
const max = validation(next, 'max');
const min = validation(next, 'min');
const ensure = transform(next, 'ensure');
const lowercase = transform(next, 'lowercase');
const trim = transform(next, 'trim');
const uppercase = transform(next, 'uppercase');

/*
    Set of functions that when called specify which validations and transformations
    are to be applied to the field value. Calling the function will add its action
    type to the validations or transforms list, then pass the updated lists to the next 
    function in the schema's validation chain, or return the lists from the last function
    in the chain.
*/
const actions = (validations, transforms) => {
  const applyValidations = func => func(next, validations);
  const commonActionFuncs = map(applyValidations, commonActions);

  return {
    ...commonActionFuncs,
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
