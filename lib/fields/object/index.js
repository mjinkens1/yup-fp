// Functions
import { flattenSchema } from '../../internal/flattenSchema';
import { validateObject } from '../../internal/validateObject';

// Utils
import { compose } from '../../utils';

const objectActions = schema => ({
  validate: object => console.log(object),
  // validate: validateObject(schema),
});

export const object = schema => {
  console.log(schema);
  return compose(objectActions, flattenSchema)(schema);
};
