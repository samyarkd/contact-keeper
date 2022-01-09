import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import ContactContext from "../context/contact/contactContext";
const ResponsiveAppBar = ({ title, icon }) => {
  const authContext = React.useContext(AuthContext);
  const contactContext = React.useContext(ContactContext);
  const { user, isAuthenticated, logout } = authContext;
  const { clearContacts } = contactContext;

  const logoutHandler = () => {
    logout();
    clearContacts();
  };

  const Authenticated = () => {
    return (
      <div className='flex flex-row gap-5'>
        <div>
          Hello,
          <span className='font-medium '> {user && user.name}</span>
        </div>
        <ul>
          <li>
            <button
              onClick={logoutHandler}
              className='flex flex-row items-center gap-3 hover:bg-red-600 duration-200 rounded px-3'
            >
              Logout <i className='fas fa-sign-out' />
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const GuestUser = () => {
    return (
      <div className='flex flex-row gap-5'>
        <ul>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar className='grid justify-between' disableGutters>
          <Box className='grid grid-cols-2 items-center justify-items-center'>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {title}
            </Typography>

            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? <Authenticated /> : <GuestUser />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

ResponsiveAppBar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
ResponsiveAppBar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default ResponsiveAppBar;
