import ThreadsItem from "../ThreadsItem";
import PropTypes from 'prop-types';

function ThreadsList({ threads }) {
  return (
    <div className="border-b-2 border-blue-400 flex flex-col gap-4">
      <h2>Discussion Available</h2>
      {
        threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape()),
}

export default ThreadsList;