// Utils
import * as U from '../../utils';

const dotPath = prevKey => ([key, value]) => [`${prevKey}.${key}`, value];
const returnKeyValuePair = (key, value) => [[key, value]];

const traverse = object =>
  U.chain(([key, value]) => {
    return U.ifElse(
      U.compose(U.equals('Object'), U.type),
      U.compose(U.map(dotPath(key)), traverse),
      () => returnKeyValuePair(key, value)
    )(value);
  }, U.toPairs(object));

export const flattenObject = object => {
  return U.fromPairs(traverse(object));
};
