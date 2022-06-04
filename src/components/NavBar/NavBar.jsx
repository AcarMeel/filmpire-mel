import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const isAuthenticated = true;
  const avatarImg = "https://avatars.githubusercontent.com/u/12101676?v=4";

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prev) => !prev )}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />{" "}
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className="classes.linkButton"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={avatarImg}
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prev) => !prev )}
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              open
              classes={{ paper: classes.drawerPaper }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
