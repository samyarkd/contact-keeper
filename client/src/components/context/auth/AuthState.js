import { useReducer } from "react";
import authContext from "./AuthContext";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: "true",
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authContext, initialState);

  //   Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
