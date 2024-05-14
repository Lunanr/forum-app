import ThreadItem from '../ThreadItem';
import PropTypes from 'prop-types';

function ThreadsList({
  threads,
  upVote,
  downVote,
  neutralizeVote,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Discussion Available</h2>
      {threads.map((thread, index) => (
        <ThreadItem
          key={index}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadsList;