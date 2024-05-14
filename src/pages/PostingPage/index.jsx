import { useDispatch } from "react-redux";
import { asyncCreateThread } from "../../states/threads/action";
import PostingInput from "../../components/Posting/PostingInput";
import { useNavigate } from "react-router-dom";

function PostingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));

    navigate('/')
  };

  return (
    <div>
      {/* Header */}
      <h1 className="text-xl mb-5 font-bold">
        What Do you Think Today
      </h1>
      {/* Body */}
      <PostingInput addThread={onAddThread} />
      {/* Footer */}
    </div>
  );
}

export default PostingPage;
