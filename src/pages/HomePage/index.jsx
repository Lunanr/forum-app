import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../../components/Threads/ThreadsList';
import { asyncPopulateUserAndThreads } from '../../states/shared/action';
// import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../../states/threads/action';

function HomePage() {
  // Mengambil threads, users, dan authUser dari store
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  // get dispatch funciton from store
  const dispatch = useDispatch();

  useEffect(() => {
    // Mengirimkan aksi async untuk mengambil data threads dan user
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  // const onUpVote = (id) => {
  //   dispatch(asyncToggleUpVoteThread(id));
  // }

  // const onDownVote = (id) => {
  //   dispatch(asyncToggleDownVoteThread(id));
  // }

  const threadsList = Array.isArray(threads)
    ? threads.map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.user),
      authUser: authUser.id,
    }))
    : [];

  return (
    <section className="home-page">
      <ThreadsList threads={threadsList} />
    </section>
  )
}

export default HomePage;