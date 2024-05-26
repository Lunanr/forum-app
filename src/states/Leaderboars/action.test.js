/**
 * skenario test
 *
 * asyncPopulateLeaderBoards
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
*/

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncPopulateLeaderboards, receiveLeaderboardsActionCreator,
} from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'user-1',
      name: 'User Test 1',
      email: 'test@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 20,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

// .. kode fake data
describe('asyncPopulateLeaderBoards thunk', () => {
  beforeEach(() => {
    api._getLeaderBoards = api.getLeaderBoards;
  });

  afterEach(() => {
    api.getLeaderBoards = api._getLeaderBoards;

    // delete backup data
    delete api._getLeaderBoards;
  });

  // ... backup and restore
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementataion
    api.getLeaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementataion
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(dispatch).toBeCalledWith(hideLoading());
    expect(window.alert).toBeCalledWith(fakeErrorResponse.message);
  });
});