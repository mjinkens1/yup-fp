import * as U from '../../../utils';

const ensureTransform = value => {
  if (U.isNil(value)) {
    return [];
  } else if (!U.is(Array, value)) {
    return [value];
  }
  return value;
};

export { ensureTransform };
