import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
  asyncCreateComment,
} from '../../states/threadDetail/action';
import ThreadDetail from '../../components/Threads/ThreadDetail';
import CommentInput from '../../components/Comment/CommentInput';
import CommentList from '../../components/Comment/CommentList';

export default function ThreadDetailPage() {
  const { threadId } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeutralizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteCommment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <div className="rounded-lg py-1 text-lg">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neutralizeVoteThreadDetail={onNeutralizeVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />

        <CommentList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteCommment}
          neutralizeVoteComment={onNeutralizeVoteComment}
        />
      </div>
    </section>
  );
}