import { useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput'
import PropTypes from 'prop-types';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const navigate = useNavigate();

  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
    navigate('/');
  };
  return (
    <div className="mt-3">
      <h1 className="text-lg font-bold mb-3">Beri komentar</h1>
      <form>
        <textarea
          className="w-full min-h-60 border border-slate-200 outline-none p-1 rounded"
          value={comment}
          onChange={onCommentChange}
        />
        <button
          type="submit"
          className="w-full py-2 px-[4rem] rounded-full bg-blue-300 mt-3 hover:bg-blue-700 cursor-pointer"
          onClick={onCommentSubmit}
        >
          Kirim
        </button>
      </form>
    </div>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};