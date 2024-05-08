import ThreadsItem from "../ThreadsItem";

const ThreadsList = () => {
  return (
    <div className="border-b-2 border-blue-400 flex flex-col gap-4">
      <h2>Discussion Available</h2>
      <ThreadsItem />
    </div>
  );
}

export default ThreadsList;