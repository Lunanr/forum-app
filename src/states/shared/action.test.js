/**
 * skenario test
 *
 * asyncPopulateUsersAndThreads thunk
 * - should dispatch action correctly when data fething success
 * - should dispatch action and call alert correctly when data fecthing failed
 */
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import asyncPopulateUserAndThreads from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Test 1',
    body: 'Ini adalah thread kesatu',
    category: 'Welcome',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    createdAt: '2021-06-21T07:00:00.000Z',
  },
];

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'User Test 1',
    email: 'test@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

// .. kode fake data
describe('asyncPopulateUserAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup data
    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fething success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateUserAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fecthing failed', async () => {
    // arrange
    // stub impelentation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateUserAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});