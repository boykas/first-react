import React from 'react';

import { MediumMenu } from './MediumMenu';
import { SmallMenu } from './SmallMenu';

export const Pages = ['Products', 'Pricing', 'Blog'];

export function Menu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <MediumMenu anchorElNav={anchorElNav} closeNavMenu={handleCloseNavMenu} openNavMenu={handleOpenNavMenu} />
      <SmallMenu closeNavMenu={handleCloseNavMenu} />
    </>
  );
}
