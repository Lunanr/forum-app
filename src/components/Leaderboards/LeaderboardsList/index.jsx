import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from '../../constant';

export default function LeaderboardsList({ user, score }) {
  return (

    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <img
          className="w-10 h-10 rounded-full align-middle bg-slate-100"
          src={user.avatar}
          alt={user.name}
        />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderboardsList.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};