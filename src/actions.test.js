import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as actions from './actions';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apiCall } from './api/api';

const mockStore = configureStore([thunkMiddleware]);

it('can create an action to setSearchField', () => {
  const text = 'test';
  const expectedAction = { type: CHANGE_SEARCH_FIELD, payload: text };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

// install react-mock-store to get dispatch in action test
it('can create REQUEST_ROBOTS_PENDING action', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const actionArr = store.getActions();
  console.log(actionArr);
  const expectedAction = { type: REQUEST_ROBOTS_PENDING };
  expect(actionArr[0]).toEqual(expectedAction);
});
