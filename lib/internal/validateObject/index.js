// Utils
import { ap, compose, lensPath, map, split, view } from '../../utils';

const splitByDot = split('.');
const lenseDotPath = compose(lensPath, splitByDot);

console.log(ap([x => x + 2, x => x * 2], [1]));

const withValue = object => ({ path, ...restObject }) => ({
  ...restObject,
  value: view(lenseDotPath(path), object),
});

const withValuesForValidation = (schema, object) => {
  return map(withValue(object), schema);
};

const validateField = ({ actions, value }) => {
  console.log(actions, value);
};

export const validateObject = schema => object => {
  return map(validateField, withValuesForValidation(schema, object));
};
