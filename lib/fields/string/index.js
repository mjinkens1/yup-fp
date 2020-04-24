// Constants
import { STRING } from '../../constants';

// Functions
import { field } from '../../internal';
import { ensure, toLower, toUpper, trim } from './transformers';

export const stringValidators = {};
export const stringTransforms = { ensure, toLower, trim, toUpper };
export const string = field(STRING);
