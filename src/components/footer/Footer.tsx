import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import background from './images/footer_background.webp';

const containerStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto',
  height: '586px',
  marginBottom: '24px',
  padding: '90px 0 0 0',
  width: '100%'
};

const footerDataContainer = {
  backgroundColor: 'white',
  height: '417.5px',
  // marginTop: '90px',
  padding: '0 0 0 0',
  width: '1230px'
};

export function Footer() {
  return (
    <Box>
      <Container maxWidth={false} sx={containerStyle}>
        <Container maxWidth={false} sx={footerDataContainer}>
          Hello
        </Container>
      </Container>
    </Box>
  );
}
