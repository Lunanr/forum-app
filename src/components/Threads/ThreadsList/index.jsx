import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from '../ThreadItem';
import { threadItemShape } from '../../constant';

function ThreadsList({
  threads,
  upVote,
  downVote,
  neutralizeVote,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Discussion Available</h2>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
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
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadsList;