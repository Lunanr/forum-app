import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading sticky top-0">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}
      <LoadingBar />
    </div>
  );
}

export default Loading;
