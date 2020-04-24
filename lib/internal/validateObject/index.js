// Utils
import * as U from '../../utils';

const isFunction = U.is(Function);

export const validateObject = U.curry((schema, object) => {
  return U.mapObjIndexed((value, key) => {
    return U.ifElse(
      isFunction,
      U.applyTo(U.prop(key, object)),
      U.flip(validateObject)(U.prop(key, object))
    )(value);
  })(schema);
});
