import React from 'react';
import { Link } from 'react-router-dom';
import { RiThreadsFill } from 'react-icons/ri';
import { MdOutlineLeaderboard } from 'react-icons/md';

function SideNav() {
  const navLinks = [
    {
      icons: <RiThreadsFill />,
      label: 'Threads',
      link: '/',
    },
    {
      icons: <MdOutlineLeaderboard />,
      label: 'Laeaderboard',
      link: '/leaderboards',
    },
  ];

  return (
    <div className="h-full flex flex-col gap-4 border-r-2 border-blue-400 ">
      {navLinks.map((d, i) => (
        <Link key={d.id || `${i}-${d.label}`} to={d.link} className="font-bold flex items-center gap-4 hover:bg-blue-200 max-w-[fit-content] rounded-full px-2">
          {React.cloneElement(d.icons, { className: 'h-6 w-6' })}
          {d.label}
        </Link>
      ))}
      <div>
        <button
          type="button"
          className="rounded-full py-2 px-[4rem] bg-blue-300 hover:bg-blue-700 cursor-pointer"
        >
          <Link to="/posting">Posting</Link>
        </button>
      </div>
    </div>
  );
}

export default SideNav;