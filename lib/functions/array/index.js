// Constants
import { ARRAY } from '../../constants';

// Functions
import { validateType } from '../types';
import {
  validateMax,
  validateMin,
  validateOf,
  validateRequired,
} from './validators';
import { ensureTransform } from './transformers';

// Utils
import { transform, validation } from '../../utils';

// Apply action types to generic action functions
const max = validation('max');
const min = validation('max');
const of = validation('of');
const ensure = transform('ensure');

const arrayValidators = {
  array: validateType(Array, ARRAY),
  max: validateMax,
  min: validateMin,
  of: validateOf,
  required: validateRequired,
};

const arrayTransformers = {
  ensure: ensureTransform,
};

const array = (message, actions) => ({ message, actions });

export { array, arrayTransformers, arrayValidators, ensure, max, min, of };
