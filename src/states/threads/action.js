import api from "../../utils/api";
// import {hideLoading, showLoading} from 'react-redux-loading-bar';

const ActionType = {
  ADD_THREADS: 'ADD_THREADS',
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRALIZE_VOTE_THREAD: 'TOGGLE_NEUTRALIZE_VOTE_THREAD',
};

function addThreadsActionCreator(thread){
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      thread,
    },
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asycAddThread({ title, body, category = ''}) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category});
      dispatch(addThreadsActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id}));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id}));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id}));
    }
  };
}

function asyncToggleNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    const {authUser} = getState();
    dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id}));

    try {
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId:authUser.id}));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadsActionCreator,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralizeVoteThreadActionCreator,
  asycAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralizeVoteThread
};