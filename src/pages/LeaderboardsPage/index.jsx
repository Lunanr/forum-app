import LeaderboardsList from "../../components/Leaderboards/LeaderboardsList";

const LeaderboardsPage = () => {
  return (
    <section className="Leaderboard-Page">
      <div className="flex flex-col gap-5">
        <h2>Klasmen Pengguna Aktif</h2>
        <LeaderboardsList />
      </div>
    </section>
  )
}

export default LeaderboardsPage;