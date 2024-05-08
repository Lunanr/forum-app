import { ActionType } from "./action";

function commentReducer(comments = [], action = {}) {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return [action.payload.comments, ...comments];
    case ActionType.TOGGLE_UP_VOTE_COMMENT:
      return comments.map((comment) => {
        if(comment.id === action.payload.threadId){
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
            // Ketika user id sudah menglike comment tersebut maka dihapus dari array menggunakan filter
            ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
            // ketika belum comments tersebut maka akan ditambahkan ke dalam array tanpa merubah struktur arraynya
            : comment.upVotesBy.concat([action.payload.userId]),
          };
        }
        return comments;
      })
    case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
      return comments.map((comment) => {
        if(comment.id === action.payload.threadId){
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
            ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
            : comment.downVotesBy.concat([action.payload.userId]),
          };
        }
        return comments;
      })
    case ActionType.TOGGLE_NEUTRALIZE_VOTE_COMMENT:
      return comments.map((comment) => {
        if(comment.id === action.payload.threadId){
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId)
          }
        }
      })
    default:
      return comments;
  }
}

export default commentReducer;