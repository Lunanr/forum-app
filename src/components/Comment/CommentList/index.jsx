import { AiOutlineComment } from 'react-icons/ai';
import CommentItem from '../CommentItem';

export default function CommentList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neutralizeVoteComment
}) {
  if (comments.length === 0) {
    return (
      <div className="mt-5 flex flex-col items-center">
        <AiOutlineComment className=" text-blue-600 text-9xl" />
        <p className="text-blue-600 text-lg">Belum ada komentar</p>
        <p className="text-blue-600 text-sm">
          Jadilah pertama yang berkomentar
        </p>
      </div>
    )
  }
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-3">
      <p className="mt-4">Komentar ({comments.length})</p>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralizeVote={neutralizeVoteComment}
        />
      ))}
    </section>
  )
}