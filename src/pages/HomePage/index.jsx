import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../../components/Threads/ThreadsList';
import { asyncPopulateUserAndThreads } from '../../states/shared/action';
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeVoteThread } from '../../states/threads/action';
import PopularCategory from '../../components/Category/PopularCategory';

function HomePage() {
  const [filter, setFilter] = useState('');
  // Mengambil threads, users, dan authUser dari store
  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);

  // get dispatch funciton from store
  const dispatch = useDispatch();

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    // Mengirimkan aksi async untuk mengambil data threads dan user
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  }

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  }

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  }

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <PopularCategory
        categories={categories}
        filter={filter}
        setFilter={setFilter}
      />
      <ThreadsList
        threads={
          filter
            ? threadsList.filter((thread) => thread.category === filter)
            : threadsList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neutralizeVote={onNeutralizeVoteThread}
      />
    </section>
  )
}

export default HomePage;