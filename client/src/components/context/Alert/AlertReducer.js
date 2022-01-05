import { REMOVE_ALERT, SET_ALERT } from "../type";

/* eslint-disable import/no-anonymous-default-export */
export default (state, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return [...state.filter((alert) => alert.id !== payload.id)];
    default:
      return state;
  }
};
