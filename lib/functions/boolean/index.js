// Constants
import { BOOLEAN } from '../../constants';

// Functions
import { validateRequired, validation } from '../common';
import { validateType } from '../types';

// Apply action types to generic action functions
const max = validation('max');
const min = validation('max');

const booleanValidators = {
  boolean: validateType(Boolean, BOOLEAN),
  required: validateRequired,
};

const boolean = (message, actions) => ({ message, actions });

export { boolean, booleanValidators, max, min };
