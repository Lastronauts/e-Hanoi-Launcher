import Router from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, logout } from '../../utils/firebase/auth';
import iconMaker from '../../utils/iconMaker';

const pages = ['Ranking👑'];
const settings = ['Account', 'Dashboard', 'SignOut'];

const routing_handler = (pages: string) => {
  switch (pages) {
    case '/':
      Router.push('/');
      break;
    case 'Ranking👑':
      Router.push('/ranking');
      break;
    case 'Account':
      Router.push('/account');
      break;
    case 'Dashboard':
      Router.push('/dashboard');
      break;
    case 'SignOut':
      logout();
      break;
    default:
      Router.push('/404');
      break;
  }
};

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [userState, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const [photoURLState, setPhotoURL] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      if (userState && userState.photoURL) {
        setPhotoURL(userState.photoURL);
      } else if (userState && userState.displayName) {
        setPhotoURL(await iconMaker(userState.displayName));
      } else {
        setPhotoURL(null);
      }
    })();
  });

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button onClick={() => routing_handler('/')}>
            <Image src="/favicon.ico" width={50} height={50} alt="Logo" />
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => routing_handler(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {(() => {
              if (userState && photoURLState) {
                return (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src={photoURLState} alt="user icon" />
                  </IconButton>
                );
              } else {
                return (
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => Router.push('/sign_form')}
                  >
                    サインアップ/サインイン
                    <LoginIcon />
                  </Button>
                );
              }
            })()}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    routing_handler(setting);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
