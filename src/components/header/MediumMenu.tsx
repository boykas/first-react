import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { Pages } from './Menu';

const typoStyle = {
  color: 'inherit',
  display: { md: 'flex', xs: 'none' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  mr: 2,
  textDecoration: 'none'
};

interface MediumMenuProps {
  closeNavMenu: () => void;
  openNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
}

export function MediumMenu(props: MediumMenuProps) {
  return (
    <>
      <AdbIcon sx={{ display: { md: 'flex', xs: 'none' }, mr: 1 }} />
      <Typography noWrap component="a" href="/" sx={typoStyle} variant="h6">
        LOGO
      </Typography>
      <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
        <IconButton
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
          size="large"
          onClick={props.openNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          keepMounted
          anchorEl={props.anchorElNav}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom'
          }}
          id="menu-appbar"
          open={props.anchorElNav != null}
          sx={{
            display: { md: 'none', xs: 'block' }
          }}
          transformOrigin={{
            horizontal: 'left',
            vertical: 'top'
          }}
          onClose={props.closeNavMenu}
        >
          {Pages.map(page => (
            <MenuItem key={page} onClick={props.closeNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
