import { Box } from '@mui/material';
import React from 'react';

function Public({ children}) {
  return (
    <Box bgcolor={'#f6f7f9'}>
     {children}
    </Box>
  );
}

export default Public;