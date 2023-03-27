import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

const styledHeaderTypographyMedium = {
  color: 'inherit',
  display: { md: 'flex', xs: 'none' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  mr: 2,
  textDecoration: 'none'
};

const styleHeaderTypographySmall = {
  color: 'inherit',
  display: { md: 'none', xs: 'flex' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  mr: 2,
  textDecoration: 'none'
};

export enum DisplaySize {
  medium,
  small
}

export interface LogoProps {
  size: DisplaySize;
}

export function Logo(props: LogoProps) {
  const iconStyle =
    props.size === DisplaySize.medium
      ? { display: { md: 'none', xs: 'flex' }, mr: 1 }
      : { display: { md: 'flex', xs: 'none' }, mr: 1 };
  const styledHeaderTypography =
    props.size === DisplaySize.medium ? styledHeaderTypographyMedium : styleHeaderTypographySmall;
  const hStyle = props.size === DisplaySize.medium ? 'h5' : 'h6';

  return (
    <>
      <AdbIcon sx={iconStyle} />
      <Typography noWrap component="a" href="/" sx={styledHeaderTypography} variant={hStyle}>
        LOGO
      </Typography>
    </>
  );
}
