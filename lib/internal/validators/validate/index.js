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
    const withRefVal = U.either(U.prop(refPath), () => reference);

    return U.ifElse(U.compose(U.not, predicate), returnMessage, () => null)(
      value,
      withRefVal(refs),
      message,
      fieldName,
      refs
    );
  };
};

// export const validate = (predicate, value, message, reference) => {
//   const refPath = U.ifElse(
//     ref =>
//       U.and(U.equals(U.prop('type', actionTypes.ref)), U.prop(INTERNAL, ref)),
//     U.prop('action'),
//     () => null
//   )(reference);

//   if (refPath) {
//     console.log('REF PATH');
//     return validate(predicate, value, message, 52);
//   }

//   return ([fieldName, refs]) => {
//     return U.ifElse(
//       U.compose(U.and(U.not(refPath)), U.not, predicate),
//       returnMessage,
//       () => U.prop(refPath, refs)
//     )(value, reference, message, fieldName, refs);
//   };
// };
