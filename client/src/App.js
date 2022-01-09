/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/material";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AlertState from "./components/context/Alert/AlertState";
import AuthState from "./components/context/auth/AuthState";
import ContactState from "./components/context/contact/ContactState";
import Alerts from "./components/layout/Alert";
import ResponsiveAppBar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/privateRoutes/PrivateRoutes";
import setAuthToken from "./components/utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <ResponsiveAppBar />
              <Container maxWidth='lg'>
                <Alerts />
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route exact path='/' element={<PrivateRoute />}>
                    <Route path='/' element={<Home />} />
                  </Route>
                  <Route path='/About' element={<About />} />
                </Routes>
              </Container>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
