const PostingPage = () => {
  return (
    <div>
      {/* Header */}
      {/* Body */}
      <form className="flex flex-col gap-4">
        <input className="p-1 px-3 rounded-xl" type="text" placeholder="Title" />
        <input className="p-1 px-3 rounded-xl" type="text" placeholder="Category" />
        <textarea className="p-1 px-3 rounded-xl h-24" placeholder="Threads">
        </textarea>
      </form>
      {/* Footer */}
      <button className=" bg-blue-300 px-5 py-2 rounded-xl hover:bg-blue-700 mt-4 w-full" type="submit">Buat</button>
    </div>
  )
}

export default PostingPage;