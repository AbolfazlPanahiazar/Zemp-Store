import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import SearchIcon from "../../assets/icons/SearchIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import CartIcon from "../../assets/icons/CartIcon";
import "./Header.scss";

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className="Header">
      <div className="Header__top">
        <div>
          <CartIcon />
          <SearchIcon />
        </div>
        <div className="Header__top--title">
          <Link to="/">زمپ استور</Link>
        </div>
        <div className="Header__top--location">
          <span>ایران، تهران</span>
          <LocationIcon />
        </div>
      </div>
      <div className="Header__bottom">
        {window.innerWidth < 650 ? (
          <MenuIcon fontSize="large" onClick={handleDrawerOpen} />
        ) : (
          <nav>
            <ul>
              <Link to="/">
                <li>فروشگاه</li>
              </Link>
              <Link to="/cart">
                <li>سبد خرید</li>
              </Link>
              <li>وبلاگ</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          </nav>
        )}
      </div>
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
