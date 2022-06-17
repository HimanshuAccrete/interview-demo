import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#1976d2", color: "white" }}>
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontSize: "1.5rem",
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 500,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormatAlignLeftIcon sx={{ mr: 2 }}/>
          Users
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white', fontSize: 16 }}>
              <Avatar alt="Remy Sharp" src="/profile.jfif" />
              <span style={{ marginLeft: 10 }}>Himanshu Makwana</span>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default ResponsiveAppBar;
