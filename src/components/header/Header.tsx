import React from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import { Menu } from './Menu';
import { Profile } from './Profile';

export function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Menu />
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
