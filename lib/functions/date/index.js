// Constants
import { DATE } from '../../constants';

// Functions
import { validateType } from '../types';
import { validateMax, validateMin, validateRequired } from './validators';

// Utils
import { validation } from '../../utils';

// Apply action types to generic action functions
const max = validation('max');
const min = validation('max');

const dateValidators = {
  date: validateType(Date, DATE),
  max: validateMax,
  min: validateMin,
  required: validateRequired,
};

const date = (message, actions) => ({ message, actions });

export { date, dateValidators, max, min };
