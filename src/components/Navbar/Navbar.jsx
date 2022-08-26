import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core";
import useStyle from "./style";
import memories from "../../images/memories.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyle();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("profile");
    if (data) return setUser(JSON.parse(data));
  }, [location]);
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      // * 1000 to convert to millisec
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  });
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.name}
              src={user.picture}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
