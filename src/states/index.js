import {configureStore} from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import commentReducer from './Comment/reducer';
import leaderboardsReducer from './Leaderboars/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    comment: commentReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer
  },
});

export default store;