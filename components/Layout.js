import React , { useContext } from 'react'
import Head from 'next/head';
import NextLink from 'next/link';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {AppBar, Container, Toolbar, Typography,Link, createTheme,ThemeProvider,
  CssBaseline, Switch,Badge, Button, Menu,
  MenuItem,Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,InputBase,
} from '@material-ui/core';
 
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { getError } from '../utils/error';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useEffect } from 'react';
import Image from "next/Image";
import Footer from './Footer';





  // for scrolltop
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';




function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold:100,
  });



  
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right:12, borderRadius:"80px",  }}
      >
        {children}
      </Box>
    </Zoom>
  );
}





ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};





export default function ({title, description,children},props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode,cart, userInfo } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
    
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes =useStyles();
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e,redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = (e,redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
  };
  return (
    <div>
    <Head>
    
    <title>{title ? `${title} - food garage` : 'food garage'}</title>
        {description && <meta name="description" content={description}></meta>}
    </Head>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" className={classes.navbar}>
        <Toolbar className={classes.toolbar} >
        <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={sidebarOpenHandler}
            className={classes.menuButton}
          >
            <MenuIcon className={classes.navbarButton} />
          </IconButton>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>FooDGaragE</Typography>
            </Link>
          </NextLink>
        </Box>
        <Drawer
          anchor="left"
          open={sidbarVisible}
          onClose={sidebarCloseHandler}
        >
          <List>
            <ListItem>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>Shopping by category</Typography>
                <IconButton
                  aria-label="close"
                  onClick={sidebarCloseHandler}
                >
                  <CancelIcon />
                </IconButton>
              </Box>
            </ListItem>
            <Divider light />
            {categories.map((category) => (
              <NextLink
                key={category}
                href={`/search?category=${category}`}
                passHref
              >
                <ListItem
                  button
                  component="a"
                  onClick={sidebarCloseHandler}
                >
                  <ListItemText primary={category}></ListItemText>
                </ListItem>
              </NextLink>
            ))}
          </List>
        </Drawer>
        <div className={classes.searchSection}>
        <form onSubmit={submitHandler} className={classes.searchForm}>
          <InputBase
            name="query"
            className={classes.searchInput}
            placeholder="Search products"
            onChange={queryChangeHandler}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
   <div>
   <Switch
   checked={darkMode}
   onChange={darkModeChangeHandler}
 ></Switch>
     <NextLink href="/cart" passHref>
     <Link>
     <Typography component="span">
     {cart.cartItems.length >= 0 ? (
       <Badge
         color="secondary"
         badgeContent={cart.cartItems.length}
       >
     
     <Image src="/images/cart.png" alt="" height={30} width={30} />


       </Badge>
     ) : (
         "cart"
     )}
   </Typography>
   </Link>
     </NextLink>
     {userInfo ? (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={loginClickHandler}
          className={classes.navbarButton}
        >
          {userInfo.name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={loginMenuCloseHandler}
        >
        <MenuItem
        onClick={(e) => loginMenuCloseHandler(e, '/profile')}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={(e) =>
          loginMenuCloseHandler(e, '/order-history')
        }
      >
        Order Hisotry
          </MenuItem>
          






          {userInfo.isAdmin && (
            <MenuItem
              onClick={(e) =>
                loginMenuCloseHandler(e,'/admin/dashboard')
              }
            >
              Admin Dashboard
            </MenuItem>
          )}
          <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
        </Menu>
      </>
    ) : (
      <NextLink href="/login" passHref>
      <Link>
      <Typography component="span">Login</Typography>
    </Link>
      </NextLink>
    )}
   </div>
 </Toolbar>
 
</AppBar>
<Toolbar id="back-to-top-anchor" />

<Container className={classes.main}>{children}</Container>



<footer className={classes.footer}>

 <Footer /> 

    
 <ScrollTop {...props}>
      <Fab color="error" size='small' aria-label="scroll back to top">
        {/* <KeyboardArrowUpIcon /> */}

        <ArrowUpwardIcon />

      
        </Fab>
      </ScrollTop>

</footer>
</ThemeProvider>
   </div>
  )
}
