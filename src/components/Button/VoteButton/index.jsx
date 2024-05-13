import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from "react-icons/fa";

function VoteButton({
  id,
  authUser,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy,
  downVotesBy,
}) {
  const isUpvoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  function onDownVoteClick() {
    downVote(id);
  }

  function onUpVoteClick() {
    upVote(id);
  }

  function onNeutralizeVoteClick() {
    neutralizeVote(id);
  }

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        {isUpvoted ? (
          <button
            onClick={onNeutralizeVoteClick}
          >
            <FaThumbsUp />
          </button>
        ) : (
          <button
            onClick={onUpVoteClick}
          >
            <FaRegThumbsUp />
          </button>
        )}
        <p>{upVotesBy.length}</p>
      </div>
      <div className="flex items-center gap-2">
        {isDownVoted ? (
          <button
            onClick={onNeutralizeVoteClick}
          >
            <FaThumbsDown />
          </button>
        ) : (
          <button
            onClick={onDownVoteClick}
          >
            <FaRegThumbsDown />
          </button>
        )}
        <p>{downVotesBy.length}</p>
      </div>
    </div>
  )
}

export default VoteButton;