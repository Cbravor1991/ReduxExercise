import { combineReducers } from 'redux';

import { sampleReducer } from './sampleReducer';
import { otherSampleReducer } from './otherSampleReducer';
import { higherOrderReducer } from './higherOrderReducer';
import { polishCalcReducer } from './polishCalcReducer';


export const rootReducer = higherOrderReducer(
  combineReducers({
    sample: sampleReducer,
    otherSample: otherSampleReducer,
    polish: polishCalcReducer
  })
);
