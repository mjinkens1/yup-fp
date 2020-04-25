// Utils
import * as U from '../../utils';

const isFunction = U.is(Function);

const traverse = (key, object) => {
  return U.ifElse(
    isFunction,
    U.applyTo(U.prop(key, object)),
    U.flip(validateObject)(U.prop(key, object))
  );
};

const applyTraverse = object => (value, key) => {
  return traverse(key, object)(value);
};

const mapObject = U.compose(U.mapObjIndexed, applyTraverse);

export const validateObject = U.curry((schema, object) => {
  return mapObject(object)(schema);
});
