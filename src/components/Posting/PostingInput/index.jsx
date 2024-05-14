import { useState } from 'react';
import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';

export default function PostingInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');

  function onInputBody(e) {
    setBody(e.target.innerHTML);
  }

  function onSubmit(e) {
    e.preventDefault();
    addThread({ title, category, body })
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <input
        className="p-1 px-3 rounded-xl"
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onTitleChange}
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
      <div
        className="w-full min-h-60 border border-slate-200 outline-none p-1 rounded-xl focus:ring-1 focus:ring-primary bg-white"
        value={body}
        onInput={onInputBody}
        contentEditable
      />
      <button
        className="bg-blue-300 px-5 py-2 rounded-xl hover:bg-blue-700 mt-4 w-full"
        type="submit"
      >
        Posting
      </button>
    </form>
  )
}

PostingInput.propTypes = {
  addThread: PropTypes.func.isRequired,
}