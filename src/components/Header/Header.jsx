import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, List, ListItem, Divider, Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";

import SearchIcon from "../../assets/icons/SearchIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import CartIcon from "../../assets/icons/CartIcon";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    direction: "ltr",
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navlist: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "900px",
  },
  navListItem: {
    display: "flex",
    justifyContent: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  itemText: {
    textAlign: "right",
    paddingRight: "5px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className="Header">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <CartIcon />
          <SearchIcon />
        </Box>
        <Link to="/">
          <Typography variant="h1" className={classes.headerTitle}>
            زمپ استور
          </Typography>
        </Link>
        <Box display="flex" justifyContent="center" alignItems="center">
          <span>ایران، تهران</span>
          <LocationIcon />
        </Box>
      </Box>
      <Box display="flex">
        {window.innerWidth < 650 ? (
          <Box>
            <MenuIcon fontSize="large" onClick={handleDrawerOpen} />
          </Box>
        ) : (
          <Box display="flex" justifyContent="center" width={1}>
            <List className={classes.navlist}>
              <ListItem className={classes.navListItem}>
                <Link to="/">فروشگاه</Link>
              </ListItem>
              <ListItem className={classes.navListItem}>
                <Link to="/cart">سبد خرید</Link>
              </ListItem>
              <ListItem className={classes.navListItem}>وبلاگ</ListItem>
              <ListItem className={classes.navListItem}>درباره ما</ListItem>
              <ListItem className={classes.navListItem}>تماس با ما</ListItem>
            </List>
          </Box>
        )}
      </Box>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemText className={classes.itemText}>فروشگاه</ListItemText>
            </ListItem>
          </Link>
          <Link to="/cart">
            <ListItem button>
              <ListItemText className={classes.itemText}>سبد خرید</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText className={classes.itemText}>وبلاگ</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText className={classes.itemText}>درباره ما</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText className={classes.itemText}>تماس با ما</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}

export default Header;
