// import api from "../../utils/api";

const ActionType = {
  RECEIVE_LEADERBOARS: 'RECEIVE_LEADERBOARS',
}

function receiveLearderboarsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARS,
    payload: {
      leaderboards,
    },
  };
}

export {
  ActionType,
  receiveLearderboarsActionCreator,
};