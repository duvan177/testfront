"use client";
import React, { use, useEffect, useState } from "react";
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useUserStore } from "@/store/users.store";

function AppHeader() {
  const user = useUserStore((state) => state.userAuth);
  const setUseAuth = useUserStore((state) => state.setUserAuth);
  const [userLogged, setUserLogged] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log(user);
    if (user?.Nombres) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [user]);
  return (
    <AppBar className="bg-black" position="static">
      <Toolbar>
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Test Bolsa Empleados
        </Typography>
        {!isMobile ? (
          <>
            <Button color="inherit">
              {userLogged ? (
                <>
                  <Link
                   onClick={()=>{
                    setUseAuth({});
                    setUserLogged(false);
  
                  } }
                  href={"/"}
                  >Logout</Link>
                </>
              ) : (
                <Link href={"/auth"}>Login</Link>

              )}
            </Button>

            {userLogged && user?.Cedula == "123123" ? (
              <Button color="inherit">
                <Link href={"/admin"}>Admin</Link>
              </Button>
            ) : null}
          </>
        ) : null}

        {/* Menú para dispositivos móviles */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>
            {userLogged ? (
              <Link onClick={()=>{
                setUseAuth({});
                setUserLogged(false);
              }} className="">
                Logout
              </Link>
            ) : (
              <Link href={"/auth"} className="">
                Login
              </Link>
            )}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
