import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import PostingPage from './pages/PostingPage';
import Navigation from './components/Navigation';
import SideNav from './components/SideNav';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';

function App() {
  // Digunakan untuk mengambil authUser dan isPreload state from store
  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);

  // digunakan untuk mengambil aksi ke store Redux
  const dispatch = useDispatch();

  useEffect(() => {
    // mengambil aksi asyncronus untuk preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    // Mengambil aksi asyncronus untuk keluar halaman
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="font-inter">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </>
    )
  }

  return (
    <div className="font-inter">
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
        <Loading />
      </header>
      <main className="min-h-screen mx-auto my-0 bg-gradient-to-tr from-[#9BB6EB] to-[#D2E0FA] flex flex-row px-5 pt-3">
        <div className="w-full sm:w-3/12 lg:w-2/12 text-left">
          <SideNav />
        </div>
        <div className="w-full sm:w-9/12 lg:w-7/12 px-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:threadId" element={<ThreadDetailPage />} />
            <Route path="/posting" element={<PostingPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App;