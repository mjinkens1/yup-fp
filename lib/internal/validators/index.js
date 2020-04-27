// Action Types
import { actionTypes } from '../actionTypes';

// Validators
import { email } from './email';
import { fieldType } from './fieldType';
import { greaterThan } from './greaterThan';
import { integer } from './integer';
import { length } from './length';
import { lessThan } from './lessThan';
import { matches } from './matches';
import { max } from './max';
import { min } from './min';
import { negative } from './negative';
import { positive } from './positive';
import { ref } from './ref';
import { required } from './required';

export const validators = {
  [actionTypes.email]: email,
  [actionTypes.fieldType]: fieldType,
  [actionTypes.greaterThan]: greaterThan,
  [actionTypes.integer]: integer,
  [actionTypes.length]: length,
  [actionTypes.lessThan]: lessThan,
  [actionTypes.matches]: matches,
  [actionTypes.max]: max,
  [actionTypes.min]: min,
  [actionTypes.negative]: negative,
  [actionTypes.of]: () => () => () => null,
  [actionTypes.positive]: positive,
  [actionTypes.ref]: ref,
  [actionTypes.required]: required,
};
