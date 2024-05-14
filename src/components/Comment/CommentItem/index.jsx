import { postedAt } from '../../../utils';
import VoteButton from '../../Button/VoteButton';
import PropTypes from 'prop-types';
import { commentShape } from '../../constant';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralizeVote,
  authUser,
}) {
  return (
    <div className="mt-3 flex flex-col gap-3 border-b-2 border-blue-400">
      <header className="flex flex-row gap-3">
        <img
          className="w-6 h-6 rounded-full"
          src={owner.avatar}
          alt={owner.name} />
        <p>{owner.name}</p>
        <p>{postedAt(createdAt)}</p>
      </header>
      <div>
        {content}
      </div>
      <div className="mb-5">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};