// Constants
import { STRING } from '../../constants';

// Functions
import { validateType } from '../types';
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
  validateRequired,
} from './validators';

// Utils
import { transform, validation } from '../../utils';

// Apply action types to generic action functions
const email = validation('email');
const length = validation('length');
const matches = validation('matches');
const max = validation('max');
const min = validation('min');
const required = validation('required');
const ensure = transform('ensure');
const lowercase = transform('lowercase');
const trim = transform('trim');
const uppercase = transform('uppercase');

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

const string = (message, actions) => ({ message, actions });

export {
  string,
  stringTransforms,
  stringValidators,
  email,
  length,
  matches,
  max,
  min,
  required,
  ensure,
  lowercase,
  trim,
  uppercase,
};
