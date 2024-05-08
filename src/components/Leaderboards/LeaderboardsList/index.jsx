const LeaderboardsList = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <img className="w-10 h-10 rounded-full align-middle bg-slate-100" src="" alt="Logo" />
          <p>Luthfi Adnan Rahmantyo</p>
        </div>
        <p>10</p>
      </div>
    </>
  )
}

export default LeaderboardsList;