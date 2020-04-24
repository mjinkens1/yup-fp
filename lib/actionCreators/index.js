// Constants
import { INTERNAL } from '../constants';

const createAction = category => {
  return (type, message, reference, transformArgs) => ({
    category,
    type,
    message,
    reference,
    transformArgs,
    [INTERNAL]: true,
  });
};

const createTransformAction = createAction('transform');
const createValidationAction = createAction('validation');

const comparative = type => {
  return (reference, message) => {
    return createValidationAction(type, message, reference);
  };
};

const truthy = type => {
  return message => {
    return createValidationAction(type, message);
  };
};

const transform = type => {
  return transformArgs => {
    return createTransformAction(type, null, null, transformArgs);
  };
};

const validation = { comparative, truthy };

export { transform, validation };
