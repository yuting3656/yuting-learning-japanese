import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

//
// IMPORT ZONE
//

const Day05 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOnclick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuOnClose = () => {
    setAnchorEl(null);
  };

  const go2YutingBlog = () => {
    window.open("https://yuting3656.github.io/yutingblog/");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e) => handleMenuOnclick(e)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            提姆要學 50 音{" "}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => go2YutingBlog()}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => handleMenuOnClose()}
        >
          <MenuItem> Day 01 還</MenuItem>
          <MenuItem> Day 02 沒</MenuItem>
          <MenuItem> Day 03 有</MenuItem>
          <MenuItem> Day 04 用</MenuItem>
          <MenuItem> Day 05 拉</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Day05;
