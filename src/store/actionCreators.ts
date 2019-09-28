import { bindActionCreators } from 'redux';
import { exampleActionCreators } from './modules/example';
import store from './index';

const { dispatch } = store;

export const ExampleActions = bindActionCreators(
  exampleActionCreators,
  dispatch
);
