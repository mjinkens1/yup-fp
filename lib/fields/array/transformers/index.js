import { is, isNil } from '../../../utils';

const ensureTransform = value => {
  if (isNil(value)) {
    return [];
  } else if (!is(Array, value)) {
    return [value];
  }
  return value;
};

export { ensureTransform };
