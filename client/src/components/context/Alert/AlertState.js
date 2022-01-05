import { useReducer } from "react";
import { v4 } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../type";
import AlertContext from "./AlertContext";
import alertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = [false];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    const id = v4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: { id } });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
