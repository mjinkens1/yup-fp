// Constants
import { INTERNAL } from '../constants';

import { validators } from '../internal/validators';

const createAction = (type, message, reference, transformArgs) => {
  return {
    type,
    action: validators[type](reference, message, transformArgs),
    [INTERNAL]: true,
  };
};

const comparative = type => {
  return (reference, message) => {
    return createAction(type, message, reference);
  };
};

const truthy = type => {
  return message => {
    return createAction(type, message);
  };
};

const transform = type => {
  return transformArgs => {
    return createAction(type, null, null, transformArgs);
  };
};

const validation = { comparative, truthy };

export { transform, validation };
