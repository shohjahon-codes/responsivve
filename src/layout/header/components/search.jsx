import React from "react";
import logo from "../../../assets/logo.svg";
import logoMobile from "../../../assets/logo-mobile.svg";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LocationIcon } from "../../../assets/icons/location-icon";
import { LogoLink } from "./style";
import { theme } from "../../../config/mui-config";
import { SerarchInput } from "../../../components/search-input/serarch-input";
import { BurgerMenu } from "../../../assets/icons/burger-menu";
import { useToggle } from "../../../hooks/useToggle";
import { links } from "../header-data";
import { Link } from "react-router-dom";
import { HeaderButton } from "./header-button";
import { SearchMobileInput } from "../../../components/search-input/search-mobile-input";

export const Search = () => {
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
  const { close, isOpen, open } = useToggle();
  const changeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Stack
      direction={"row"}
      gap={{ xs: "33px", md: "60px" }}
      alignItems={"center"}
      flexGrow={1}
    >
      <Stack gap={"16px"} alignItems={"center"} direction={"row"}>
        <IconButton
          onClick={open}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <BurgerMenu />
        </IconButton>
        <LogoLink to={"/"}>
          {md ? (
            <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" />
          ) : (
            <img
              style={{ verticalAlign: "bottom" }}
              src={logoMobile}
              alt="img"
            />
          )}
        </LogoLink>
      </Stack>
      <Stack
        display={{ xs: "none", md: "flex" }}
        direction={"row"}
        gap="8px"
        alignItems={"center"}
      >
        <IconButton>
          <LocationIcon />
        </IconButton>
        <Typography variant="body1">Алматы</Typography>
      </Stack>
      {md ? (
        <SerarchInput onChange={changeInput} />
      ) : (
        <SearchMobileInput onChange={changeInput} />
      )}
      <Drawer open={isOpen} onClose={close} anchor="left">
        <Box bgcolor={"white"} p="30px" height="100vh" width={"300px"}>
          <Stack mb={"20px"} gap={"20px"}>
            {links.map((item) => (
              <Link style={{ textDecoration: "none" }} key={item.id} to={"/"}>
                <Typography variant="body1">{item.name}</Typography>
              </Link>
            ))}
          </Stack>
          <HeaderButton />
        </Box>
      </Drawer>
    </Stack>
  );
};
