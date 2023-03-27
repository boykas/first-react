import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Pages } from './Menu';

const typoStyle = {
  color: 'inherit',
  display: { md: 'none', xs: 'flex' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  mr: 2,
  textDecoration: 'none'
};

interface SmallMenuProps {
  closeNavMenu: () => void;
}

export function SmallMenu(props: SmallMenuProps) {
  return (
    <>
      <AdbIcon sx={{ display: { md: 'none', xs: 'flex' }, mr: 1 }} />
      <Typography noWrap component="a" href="" sx={typoStyle} variant="h5">
        LOGO
      </Typography>
      <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
        {Pages.map(page => (
          <Button key={page} sx={{ color: 'white', display: 'block', my: 2 }} onClick={props.closeNavMenu}>
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
}
