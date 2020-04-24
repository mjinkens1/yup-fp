// Constants
import { INTERNAL } from '../../constants';

// Utils
import {
  compose,
  filter,
  head,
  isInternal,
  reject,
  reverse,
  uniqBy,
} from '../../utils';

const action = ({ type }) => type;
const rejectInternal = reject(isInternal);
const returnInternal = filter(isInternal);
const uniqueActions = uniqBy(action);

/*
  Reverse set of actions before removing duplicates so the last
  of any duplicates is used, e.g. field(max(3), max(7), max(2)) => max(2)
*/
const actions = compose(uniqueActions, reverse, returnInternal);

/*
  Any external function or string passed to the field function is taken
  as the error message for that field
*/
const message = compose(head, rejectInternal);

const field = type => (...args) => ({
  type,
  actions: actions(args),
  message: message(args),
  [INTERNAL]: true,
});

export { field };
