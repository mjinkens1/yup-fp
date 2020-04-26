// Functions
import { flattenObject } from './flattenObject';

// Utils
import * as U from '../utils';

const applyRefs = (fieldName, refs) => {
  return U.applyTo([fieldName, refs]);
};
const exists = U.compose(U.not, U.isNil);
const isFunction = U.is(Function);

export const validateObject = (schema, object) => {
  const refs = flattenObject(object);

  const traverse = (key, object) => {
    return U.ifElse(
      isFunction,
      U.compose(
        U.filter(exists),
        U.map(applyRefs(key, refs)),
        U.applyTo(U.prop(key, object))
      ),
      U.flip(validate)(U.prop(key, object))
    );
  };

  const applyTraverse = object => (value, key) => {
    return traverse(key, object)(value);
  };

  const mapObject = U.compose(U.mapObjIndexed, applyTraverse);

  const validate = U.curry((schema, object) => {
    return mapObject(object)(schema);
  });

  return validate(schema)(object);
};
