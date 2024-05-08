const PopularCategory = () => {
  return (
    <div className="h-full flex flex-col gap-4 border-l-2 border-blue-400 px-4">
      <h2>Category Popular</h2>
      <div className="flex flex-row gap-3">
        <button className="rounded-lg px-4 py-1 bg-blue-300">
          #Lunan
        </button>
        <button className="rounded-lg px-4 py-1 bg-blue-300">
          #Perkenalan React js
        </button>
      </div>
    </div>
  );
}

export default PopularCategory;