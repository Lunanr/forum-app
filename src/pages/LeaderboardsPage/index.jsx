import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import LeaderboardsList from '../../components/Leaderboards/LeaderboardsList';
import { asyncPopulateLeaderboards } from '../../states/Leaderboars/action';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboards);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <section className="Leaderboard-Page">
      <div className="flex flex-col gap-5">
        <h2>Klasmen Pengguna Aktif</h2>
        <div className="flex flex-row justify-between">
          <p>Pengguna</p>
          <p>Skor</p>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderboardsList key={user.id} user={user} score={score} />
        ))}
      </div>
    </section>
  );
}

export default LeaderboardsPage;