// Constants
import { NUMBER } from '../../../constants';

// Functions
import { validateType } from '../../types';

const roundTransform = value => {
  validateType(Number, NUMBER)(value);
  return Math.round(value);
};

const truncateTransform = value => {
  validateType(Number, NUMBER)(value);
  return Math.trunc(value);
};

export { roundTransform, truncateTransform };
