import produce from 'immer';
import {
  createStandardAction,
  createReducer,
  ActionType,
} from 'typesafe-actions';
import { Dispatch } from 'redux';
import * as ExampleAPI from 'lib/api/example';
import { RootAction } from '.';

/* ACTION TYPE & CREATOR */
const SET_EXAMPLE = 'example/SET_EXAMPLE';
const setExample = createStandardAction(SET_EXAMPLE)<{
  example: string;
}>();

/* THUNK */
const exampleThunk = () => async (dispatch: Dispatch<RootAction>) => {
  try {
    const example = await ExampleAPI.exampleMethod();
    dispatch(setExample({ example: example.message }));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

/* EXPORT ACTION CREATORS */
export const exampleActionCreators = { setExample, exampleThunk };
const syncActionCreators = { setExample };
export type ExampleAction = ActionType<typeof syncActionCreators>;

/* STATE TYPES */
export type Example = {
  msg: string;
};

/* LOCAL ROOT STATE */
export type ExampleState = {
  example: Example;
};

/* INITIAL STATE */
const initialState: ExampleState = { example: { msg: '' } };

/* REDUCERS */
const exampleReducer = createReducer<ExampleState, ExampleAction>(
  initialState
).handleAction(setExample, (state, action) =>
  produce(state, draft => {
    draft.example.msg = action.payload.example;
  })
);

export default exampleReducer;
