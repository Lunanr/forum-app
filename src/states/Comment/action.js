import api from "../../utils/api";

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRALIZE_VOTE_COMMENT: 'TOGGLE_NEUTRALIZE_VOTE_COMMENT',
}

function addCommentActionCreator({threadId, comment}) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator({ threadId, commentId, userId}) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    },
  };
}

function toggleDownVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    },
  };
}

function toggleNeutralizeVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    },
  };
}

function asyncAddComment({ threadId, newComment}) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({threadId, newComment})
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  }
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const {authUser} = getState();
    dispatch(toggleUpVoteCommentActionCreator({threadId, commentId, userId:authUser.id}));

    try {
      await api.upVoteComment({threadId, commentId});
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCreator({threadId, commentId, userId:authUser.id}));
    }
  };
}

function asyncToggleDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const {authUser} = getState();
    dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId:authUser.id}));

    try {
      await api.downVoteComment({ threadId, commentId});
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId:authUser.id}));
    }
  };
}

function asyncToggleNeutralizeVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const {authUser} = getState();
    dispatch(toggleNeutralizeVoteCommentActionCreator({ threadId, commentId, userId:authUser.id}));

    try {
      await api.neutralizeCommentVote({ threadId, commentId});
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeVoteCommentActionCreator({ threadId, commentId, userId:authUser.id}));
    }
  };
}

export {
  ActionType,
  addCommentActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleNeutralizeVoteCommentActionCreator,
  asyncAddComment,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralizeVoteComment
};