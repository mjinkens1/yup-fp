// Constants
import { STRING } from '../../constants';

// Functions
import { nextFunc, transform, validateRequired, validation } from '../common';
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

/*
    Set of functions that when called specify which validations and transformations
    are to be applied to the field value. Calling the function will add its action
    type to the validations or transforms list, then pass the updated lists to the next 
    function in the schema's validation chain, or return the lists from the last function
    in the chain.
*/
const actions = (validations, transforms) => ({
  email: email(validations, transforms),
  length: length(validations, transforms),
  matches: matches(validations, transforms),
  max: max(validations, transforms),
  min: min(validations, transforms),
  required: required(validations, transforms),
  ensure: ensure(validations, transforms),
  lowercase: lowercase(validations, transforms),
  trim: trim(validations, transforms),
  uppercase: uppercase(validations, transforms),
  validations,
  transforms,
});

const next = nextFunc(actions);

// Apply action types to generic action function
const email = validation(next, 'email');
const length = validation(next, 'length');
const matches = validation(next, 'matches');
const max = validation(next, 'max');
const min = validation(next, 'min');
const required = validation(next, 'required');
const ensure = transform(next, 'ensure');
const lowercase = transform(next, 'lowercase');
const trim = transform(next, 'trim');
const uppercase = transform(next, 'uppercase');

const stringValidators = {
  email: validateEmail,
  length: validateLength,
  matches: validateMatches,
  max: validateMax,
  min: validateMin,
  required: validateRequired,
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
