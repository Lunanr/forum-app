import { postedAt } from "../../utils"
import VoteButton from "../Button/VoteButton"

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  authUser,
}) {
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center">
        <header>
          <span className="rounded-lg py-1 bg-blue-300 px-4 text-lg">
            # {category}
          </span>
          <h1 className="mt-5 font-bold">
            {title}
          </h1>
        </header>
        <div>
          {body}
        </div>
        <div className="flex items-center gap-3 mt-3">
          <VoteButton
            id={id}
            authUser={authUser}
            upVote={upVoteThreadDetail}
            downVote={downVoteThreadDetail}
            neutralizeVote={neutralizeVoteThreadDetail}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
          <div className="flex flex-row items-center gap-3">
            <p>Dibuat Oleh</p>
            <img
              className="w-6 h-6 rounded-full"
              src={owner.avatar}
              alt={owner.name}
            />
            <p>{owner.name}</p>
            <p>{postedAt(createdAt)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}