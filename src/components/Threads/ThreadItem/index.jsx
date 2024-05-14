import React from 'react';
import PropTypes from 'prop-types';
import { BsChatLeftDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import postedAt from '../../../utils';
import VoteButton from '../../Button/VoteButton';
import { threadItemShape } from '../../constant';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralizeVote,
  user,
  authUser,
}) {
  const navigate = useNavigate();

  function onThreadClick() {
    navigate(`/threads/${id}`);
  }

  function onThreadPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/threads/${id}`);
    }
  }

  return (
    <div className="flex flex-col gap-2 justify-center border-b-2 border-blue-400">
      <header>
        <span className="rounded-lg px-4 py-1 bg-blue-300 text-lg">
          # {category}
        </span>
        <h1 className="mt-5">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer font-bold"
            onClick={onThreadClick}
            onKeyDown={onThreadPress}
          >
            {title}
          </div>
        </h1>
      </header>
      <div>
        {body}
      </div>
      <footer className="flex flex-row mb-2 gap-5 items-center p-1">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <span className="flex items-center gap-2">
          <BsChatLeftDots /> {totalComments}
        </span>
        <span>
          {postedAt(createdAt)}
        </span>
        <span>
          Dibuat oleh <strong>{user.name}</strong>
        </span>
      </footer>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};