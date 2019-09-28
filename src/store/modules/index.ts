import { combineReducers } from 'redux';
import exampleReducer, { ExampleAction } from './example';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = ExampleAction;

export default rootReducer;
