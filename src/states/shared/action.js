import api from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = api.getAllUsers();
      const threads = api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };