// Constants
import { INTERNAL } from '../constants';

// Validators
import { validators } from '../validators';

const createAction = (type, message, reference, path, transformArgs) => ({
  type,
  action: validators[type](message, reference, path, transformArgs),
  [INTERNAL]: true,
});

const comparative = type => {
  return (reference, message) => {
    return createAction(type, message, reference);
  };
};

const referential = type => {
  return path => {
    return createAction(type, null, null, path);
  };
};

const truthy = type => {
  return message => {
    return createAction(type, message);
  };
};

export const transform = type => {
  return transformArgs => {
    return createAction(type, null, null, null, transformArgs);
  };
};

export const validation = { comparative, referential, truthy };
