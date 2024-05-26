/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 * - should return the initial state when given by unknown action
 * - should return the thread detail when given
      by RECEIVE_THREAD_DETAIL action
 * - should return the thread detail with toggled UpVote when given
    by UP_VOTE_THREAD_DETAIL action
 * - should return the thread detail with toggled
 * DownVote when given
    by DOWN_VOTE_THREAD_DETAIL action
 * - should return the thread detail without toggled UpVote and Downvote when given
 * by NEUTRALIZE_VOTE_THREAD_DETAIL action
 *
 * - should return the thread detail with new comment when given by CREATE_COMMENT action
 * - should return the thread detail with toggled UpVote comment when given
    by UP_VOTE_COMMENT action
 * - should return the thread detail with toggled downVote comment when given
    by DOWN_VOTE_COMMENT action
 * - should return the thread detail without toggled  UpVote and DownVote comment
    when given by NEUTRALIZE_VOTE_COMMENT action
 *
 */

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadsDetailReducers function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrnage
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: [
          {
            id: 'thread-1',
            title: 'Thread test 1',
            body: 'Ini adalah thread kesatu',
            category: 'Welcome',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
            created: '2021-06-21T07:00:00.000Z',
          },
        ],
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with toggled UpVote when given by UP_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-09-21T07:00:00.000Z',
      };

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-1',
      },
    };

    // action: upvote detail thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with toggled DownVote when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail without toggled UpVote and Downvote when given by NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
        payload: {
          userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with new comment when given by CREATE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {},
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it('should return the thread detail with toggled UpVote comment when given by UP_VOTE_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komen satu',
          owner: {
            id: 'users-1',
            name: 'usertest',
            email: 'usertest@example.com',
          },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-09-21T07:00:00.000Z',
        },
      ],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
        ...initialState.comments[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with toggled downVote comment when given by DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komen satu',
          owner: {
            id: 'users-1',
            name: 'usertest',
            email: 'usertest@example.com',
          },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-09-21T07:00:00.000Z',
        },
      ],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail without toggled  UpVote and DownVote comment when given by NEUTRALIZE_VOTE_COMMENT action', () => {
    // arrnge
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Ini adalah thread kesatu',
      category: 'Welcome',
      createdAt: '2022-09-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komen satu',
          owner: {
            id: 'users-1',
            name: 'usertest',
            email: 'usertest@example.com',
          },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-09-21T07:00:00.000Z',
        },
      ],
      created: '2022-09-21T07:00:00.000Z',
    };

    const action = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});