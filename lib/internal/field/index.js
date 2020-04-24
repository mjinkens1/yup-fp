// Action Types
import { actionTypes } from '../../actionTypes';

// Utils
import * as U from '../../utils';

const action = ({ action }) => action;
const actionType = ({ type }) => type;
const actionRequired = ({ type }) => U.equals(type, actionTypes.required);
const rejectInternal = U.reject(U.isInternal);
const returnInternal = U.filter(U.isInternal);
const uniqueActions = U.uniqBy(actionType);

/*
  Reverse set of actions before removing duplicates so the last
  of any duplicates is used, e.g. field(max(3), max(7), max(2)) => max(2)
*/
const actions = U.compose(U.map(action), uniqueActions, returnInternal);
const required = U.any(actionRequired);
/*
  Any external function or string passed to the field function is taken
  as the error message for that field
*/
const message = U.compose(U.head, rejectInternal);

const validateFieldType = (type, message) => {
  console.log('TYPE CHECK', type, message);
  return false;
};

const field = type => (...args) => {
  return value => U.ap(actions(args), [value]);
};

export { field };
