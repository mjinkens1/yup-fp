// Action Types
import { actionTypes } from '../../actionTypes';

// Utils
import * as U from '../../utils';

const validActions = {
  Array: ['length', 'required'],
  Boolean: ['required'],
  Date: ['required'],
  Number: ['integer', 'max', 'required'],
  Object: ['required'],
  String: ['length', 'required'],
};

const validActionsForType = type => {
  return validActions[type];
};

const actionIsValid = type => {
  return U.compose(
    U.flip(U.includes)(validActionsForType(type)),
    U.prop('type')
  );
};

const isFieldRequired = U.compose(
  U.equals(actionTypes.required),
  U.prop('type')
);

const action = U.prop('action');
const actionType = U.prop('type');
const rejectInternal = U.reject(U.isInternal);
const required = U.any(isFieldRequired);
/*
  Any external function or string passed to the field function is taken
  as the error message for that field
*/
const message = U.compose(U.head, rejectInternal);

// const validateFieldType = (type, message) => {
//   return false;
// };

const field = type => (...args) => {
  const fieldRequired = required(args);

  const validActions = U.compose(
    U.map(action),
    U.uniqBy(actionType),
    U.filter(actionIsValid(type))
  );

  /*
  Return function to apply list of validation actions
  to field value. Used by object level schema validation,
  can also be used as standalone validator, e.g. 
  const validateNumber = number(integer(), max(10))
  */
  return U.compose(U.ap(validActions(args)), U.asArray);
};

export { field };
