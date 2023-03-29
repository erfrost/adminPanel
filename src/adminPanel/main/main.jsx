import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import logo from "./images/logo.png";
import photo from "./images/sitting-2.svg";
import mobileMenu from "./images/mobileMenu.svg";
import funnynail from "./images/funnynail.jpg";
import arrow from "./images/arrow.png";
import News from "../news/news";
import Products from "../products/products";
import Applications from "../applications/applications";
import { useMediaQuery } from "react-responsive";

const settings = ["Профиль", "Выход"];
const navigation = ["Главная", "Новости", "Товары", "Заявки"];

const Main = () => {
  const [page, setPage] = useState("Главная");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenuIsHover, setMobileMenuIsHover] = useState(false);
  const isMobileDevice = useMediaQuery({ maxWidth: 450 });
  const isTabletDevice = useMediaQuery({ maxWidth: 830, minWidth: 450 });
  const isMobileMenu = useMediaQuery({ maxWidth: 1000 });

  const handleMobileMenuIsHover = () => {
    setMobileMenuIsHover((prevState) => !prevState);
  };

  const renderBox2 = (
    <>
      {" "}
      {!isMobileDevice && <Grid className="title1">ГЛАВНАЯ СТРАНИЦА</Grid>}
      {!isMobileDevice && !isTabletDevice ? (
        <Grid className="title2">Добрый день, Admin!</Grid>
      ) : (
        <Box className="titleBox">
          <Grid className="title2">Admin,</Grid>
          <Grid className="title2_1">Добрый день!</Grid>
        </Box>
      )}
      <Grid className="title3">У вас нет новых заявок!</Grid>
      <Grid className="boxes">
        <Box className="box2Main">
          <Box className="box2Content">
            <Grid className="box2Header">ПОСЛЕДНЯЯ ЗАЯВКА</Grid>
            <Grid className="box2Titles">
              <img
                className="box2Image"
                src={funnynail}
                alt="Смешной гвоздь"
                width="180px"
              />
              <Box className="box2Texts">
                <Grid>Наименование товара: </Grid>
                <Grid>Количество: </Grid>
                <Grid>Телефон: </Grid>
                <Grid className="box2Text4">Время заказа: </Grid>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box className="box2Photo">
          <img className="photo" src={photo} alt={"PhotoError"} />
        </Box>
      </Grid>
    </>
  );

  const handleSwitchPage = (page) => {
    setPage(page);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {}, [page]);

  return (
    <Box className="body">
      <AppBar className="appBar">
        <Grid className="appBarLeft">
          <img
            className="mobileMenu"
            src={mobileMenu}
            alt="mobileMenu"
            onClick={handleMobileMenuIsHover}
          ></img>

          {!isMobileDevice && (
            <>
              <img className="logo" src={logo} alt={"LogoError"} />
              <Grid className="headerTitle">Панель Администратора</Grid>
            </>
          )}
        </Grid>

        {isMobileMenu ? (
          <Box className="dropdown">
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
              variant="text"
              className={
                mobileMenuIsHover
                  ? "buttonGroup border-line dropdown-content show"
                  : "buttonGroup border-line dropdown-content"
              }
            >
              {navigation.map((nav) => {
                return (
                  <Button
                    className="button"
                    key={nav}
                    onClick={() => handleSwitchPage(nav)}
                  >
                    {nav}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Box>
        ) : null}

        <Grid className="appBarRight">
          {!isMobileDevice && !isTabletDevice ? (
            <Tooltip title="Open menu" className="openMenu">
              <Grid onClick={handleOpenUserMenu}>
                <Grid className="clickedMenu">
                  <Avatar
                    className="avatar"
                    alt="Avatar"
                    src="/static/images/avatar/1.jpg"
                  />

                  <Box>Admin</Box>
                  <img className="arrow" src={arrow} alt="arrowError" />
                </Grid>
              </Grid>
            </Tooltip>
          ) : (
            <Avatar
              className="avatar"
              alt="Avatar"
              src="/static/images/avatar/1.jpg"
            />
          )}

          {!isMobileDevice && (
            <Menu
              className="menu"
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
                <MenuItem
                  className="menuItem"
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          )}
        </Grid>
      </AppBar>

      <Box className="main">
        {!isMobileDevice && (
          <Paper elevation={0} className="navigationMain">
            <Box className="navigationBox">
              <Grid className="navigationTitle">НАВИГАЦИЯ</Grid>
              <Grid>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                  variant="text"
                  className="buttonGroup"
                >
                  {navigation.map((nav) => {
                    return (
                      <Button
                        className="button"
                        key={nav}
                        onClick={() => handleSwitchPage(nav)}
                      >
                        {nav}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Grid>
            </Box>
          </Paper>
        )}

        <Paper elevation={0} className="infoPanel">
          <Box className="infoPanelTitle">
            {page === "Главная" ? (
              renderBox2
            ) : page === "Новости" ? (
              <News />
            ) : page === "Товары" ? (
              <Products />
            ) : page === "Заявки" ? (
              <Applications />
            ) : null}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default Main;
