// Actions
import { actionTypes, transform, validation } from './internal';

// Fields
import { array } from './fields/array';
import { boolean } from './fields/boolean';
import { date } from './fields/date';
import { number } from './fields/number';
import { object } from './fields/object';
import { string } from './fields/string';

// Apply action creator functions to action types
export const email = validation.truthy(actionTypes.email);
export const greaterThan = validation.comparative(actionTypes.greaterThan);
export const integer = validation.truthy(actionTypes.integer);
export const length = validation.comparative(actionTypes.length);
export const lessThan = validation.comparative(actionTypes.lessThan);
export const matches = validation.comparative(actionTypes.matches);
export const max = validation.comparative(actionTypes.max);
export const min = validation.comparative(actionTypes.min);
export const negative = validation.truthy(actionTypes.negative);
export const of = validation.comparative(actionTypes.of);
export const positive = validation.truthy(actionTypes.positive);
export const ref = validation.referential(actionTypes.ref);
export const required = validation.truthy(actionTypes.required);

export const ensure = transform(actionTypes.ensure);
export const lowercase = transform(actionTypes.lowercase);
export const round = transform(actionTypes.round);
export const trim = transform(actionTypes.trim);
export const truncate = transform(actionTypes.truncate);
export const uppercase = transform(actionTypes.uppercase);

export { array, boolean, date, number, object, string };
