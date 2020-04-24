import {
  chain,
  compose,
  ifElse,
  isInternal,
  last,
  map,
  toPairs,
} from '../../utils';

const continueTraversal = ([key, value]) => {
  return map(dotPath(key), toFlatArray(value));
};

const dotPath = prevKey => {
  return ([key, value]) => {
    return [`${prevKey}.${key}`, value];
  };
};

const returnNestedKeyValuePair = pair => [pair];
const withDotPath = ([path, object]) => ({ ...object, path });
const isInternalAction = compose(isInternal, last);

const traverse = ifElse(
  isInternalAction,
  returnNestedKeyValuePair,
  continueTraversal
);

/*
  Flattens the object into an array of arrays of length 2 containing 
  a an internal action object and its path in dot notation.
*/
const toFlatArray = compose(chain(traverse), toPairs);

/*
  Flatten the schema into an array of dot paths and actions, then map the 
  dot paths into the actions, returning an array of actions each containing
  thier respective dot path.
*/
export const flattenSchema = compose(map(withDotPath), toFlatArray);
