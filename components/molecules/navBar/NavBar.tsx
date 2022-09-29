import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/icon/Icon";

export const NavBar = () => {
  return (
    <AppBar position="fixed" className='header'>
      <Toolbar variant="dense">
        <Icon />
        <h1 className="header__title">STAR WARS</h1>
      </Toolbar>
    </AppBar>
  );
};
