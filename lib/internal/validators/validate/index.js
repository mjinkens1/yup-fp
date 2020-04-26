// Utils
import * as U from '../../utils';

const returnMessage = (value, reference, message, fieldName) => {
  return U.ifElse(
    U.is(Function),
    U.compose(U.apply(message), U.tailArgs),
    U.identity
  )(message, fieldName, value, reference);
};

export const validate = (predicate, value, message, reference) => {
  const refPath = U.prop('action', reference);

  return ([fieldName, refs]) => {
    const withRefVal = U.propOr(reference, refPath, refs);

    return U.ifElse(U.compose(U.not, predicate), returnMessage, () => null)(
      value,
      withRefVal,
      message,
      fieldName,
      refs
    );
  };
};
