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
import { useNavigate } from "react-router-dom";
import { MenuObj } from "../shared/model/MenuObj";
//
// IMPORT ZONE
//

const Header = () => {
  const navigate = useNavigate();

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

  const handleMenuOnClick = (url) => {
    navigate(url);
    handleMenuOnClose();
  };
  return (
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
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
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
        {Object.keys(MenuObj).map((m, idx) => (
          <MenuItem key={idx} onClick={() => handleMenuOnClick(MenuObj[m].url)}>
            {m} - {MenuObj[m].name}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Header;
