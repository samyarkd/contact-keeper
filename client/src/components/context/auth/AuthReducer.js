/* eslint-disable import/no-anonymous-default-export */
import { CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCESS } from "../type";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

			case CLEAR_ERRORS:
				return {
					...state,
					error: null
				}
    default:
      return state;
  }
};
