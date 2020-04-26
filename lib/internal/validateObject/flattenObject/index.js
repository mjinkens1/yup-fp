// Utils
import * as U from '../../utils';

export const flattenObject = obj => {
  const go = obj_ =>
    U.chain(([k, v]) => {
      if (U.type(v) === 'Object') {
        return U.map(([k_, v_]) => [`${k}.${k_}`, v_], go(v));
      } else {
        return [[k, v]];
      }
    }, U.toPairs(obj_));

  return U.fromPairs(go(obj));
};
