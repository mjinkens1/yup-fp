// Action Creators
import { validation } from '../actionCreators';

// Action Types
import { actionTypes, validActions } from '../actionTypes';

// Utils
import * as U from '../utils';

const validActionsForType = type => {
  return validActions[type];
};

const actionIsValid = type => {
  return U.compose(
    U.flip(U.includes)(validActionsForType(type)),
    U.prop('type')
  );
};

const action = U.prop('action');
const actionType = U.prop('type');
const rejectInternal = U.reject(U.isInternal);

/*
  Any external function or string passed to the field function is taken
  as the error message for that field
*/
const message = U.compose(U.head, rejectInternal);

export const field = type => (...args) => {
  const validActions = U.compose(
    U.map(action),
    U.uniqBy(actionType),
    U.filter(actionIsValid(type))
  );

  const fieldAction = validation.comparative(actionTypes.fieldType)(
    type,
    message(args)
  );

  const withFieldAction = U.compose(
    U.concat,
    U.of,
    U.prop('action')
  )(fieldAction);

  const actions = U.compose(withFieldAction, validActions);

  /*
  Return function to apply list of validation actions
  to field value. Used by object level schema validation,
  can also be used as standalone validator, e.g. 
  const validateNumber = number(integer(), max(10))
  Return an array of errors if any exist, otherwise returns
  an empy array.
  */
  return U.compose(U.ap(actions(args)), U.of);
};
