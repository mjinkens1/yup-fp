// Constants
import { STRING } from '../../../constants';

// Functions
import { validateType } from '../../types';

// Utils
import { toLower, toUpper, trim } from '../../../utils';

const ensureTransform = value => {
  validateType(String, STRING)(value);
  return value ?? '';
};

const lowercaseTransform = value => {
  validateType(String, STRING)(value);
  return toLower(value);
};

const trimTransform = value => {
  validateType(String, STRING)(value);
  trim(value);
};

const uppercaseTransform = value => {
  validateType(String, STRING)(value);
  return toUpper(value);
};

export {
  ensureTransform,
  lowercaseTransform,
  trimTransform,
  uppercaseTransform,
};
