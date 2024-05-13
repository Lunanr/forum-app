import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncCreateThread } from "../../states/threads/action";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

function PostingPage() {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread(title, body, category));
  }

  return (
    <div>
      {/* Header */}
      {/* Body */}
      <form className="flex flex-col gap-4" onSubmit={(e) => {
        e.preventDefault();
        onAddThread({ title, body, category })
      }}>
        <input
          className="p-1 px-3 rounded-xl"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onTitleChange}
          required
        />
        <input
          className="p-1 px-3 rounded-xl"
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={onCategoryChange}
          required
        />
        <textarea
          className="p-1 px-3 rounded-xl h-24"
          placeholder="Threads"
          name="body"
          value={body}
          onChange={onBodyChange}
        ></textarea>
        <button className="bg-blue-300 px-5 py-2 rounded-xl hover:bg-blue-700 mt-4 w-full" type="submit">
          <Link to="/">Buat</Link>
        </button>
      </form>
      {/* Footer */}
    </div>
  );
}

export default PostingPage;
