// Action Types
import { actionTypes } from '../actionTypes';

// Validators
import { fieldType } from './fieldType';
import { integer } from './integer';
import { length } from './length';
import { max } from './max';
import { ref } from './ref';
import { required } from './required';

export const validators = {
  [actionTypes.email]: () => () => () => null,
  [actionTypes.fieldType]: fieldType,
  [actionTypes.greaterThan]: () => () => () => null,
  [actionTypes.integer]: integer,
  [actionTypes.length]: length,
  [actionTypes.lessThan]: () => () => () => null,
  [actionTypes.matches]: () => () => () => null,
  [actionTypes.max]: max,
  [actionTypes.min]: () => () => () => null,
  [actionTypes.negative]: () => () => () => null,
  [actionTypes.of]: () => () => () => null,
  [actionTypes.positive]: () => () => () => null,
  [actionTypes.ref]: ref,
  [actionTypes.required]: required,
};
