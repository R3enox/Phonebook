// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { selectAuthenticated, selectUserData } from 'redux/auth/authSelectors';
// import { logOutThunk } from 'redux/auth/authThunk';

// const Layout = ({ children }) => {
//   const authenticated = useSelector(selectAuthenticated);
//   const userData = useSelector(selectUserData);
//   const dispatch = useDispatch();

//   const onLogOut = () => {
//     dispatch(logOutThunk());
//   };
//   return (
//     <>
//       <header>
//         <NavLink to="/">Home</NavLink>
//         {authenticated ? (
//           <>
//             <NavLink to="/contacts">PhoneBook</NavLink>
//             <div>
//               <p>{userData?.name}</p>
//               <button onClick={onLogOut}>Logout</button>
//             </div>
//           </>
//         ) : (
//           <>
//             <NavLink to="/login">LogIn</NavLink>
//             <NavLink to="/register">Register</NavLink>
//           </>
//         )}
//       </header>
//       <main>{children}</main>
//     </>
//   );
// };

// export default Layout;

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/authSelectors';
import { logOutThunk } from 'redux/auth/authThunk';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { useState } from 'react';

const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ['Home', 'Contacts'];

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  const onLogin = () => {
    navigate('/login');
  };

  const onRegister = () => {
    navigate('/register');
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = page => {
    setAnchorElNav(null);
    page === 'Home' ? navigate('/') : navigate(`${page.toLowerCase()}`);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BookOnlineIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PhoneBook
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <BookOnlineIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PhoneBook
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <Button
                role="link"
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={authenticated ? onLogOut : onLogin}
              >
                {authenticated ? 'LogOut' : 'Login'}
              </Button>
              {!authenticated && (
                <Button
                  role="link"
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                  }}
                  onClick={onRegister}
                >
                  {'Register'}
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
};

export default Layout;
