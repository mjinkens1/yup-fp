import { is, isNil, last, map, trim, toLower, toUpper, type } from 'ramda';

const transform = action => {
  return transformArgs => ({ type: 'transform', action, transformArgs });
};

const validate = (isValid, message, defaultMessage) => {
  const error = !isValid ? message || defaultMessage : null;
  return { error };
};

const validation = action => {
  return (...args) => {
    const [reference, message] = args.length === 1 ? [args[0]] : args;
    return { type: 'validation', action, message, reference };
  };
};

export {
  is,
  isNil,
  last,
  map,
  transform,
  trim,
  toLower,
  toUpper,
  type,
  validate,
  validation,
};
