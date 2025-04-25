import { Close } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

function ContainerDrawer({open =false , title = 'Nội dụng drawer', onClose, children}) {
  const { t } = useTranslation()
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <Drawer
          anchor={'right'}
          open={open}
          onClose={onClose}
        >
          <Box width={isMobile? 300: 400}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              py={1}
              px={2}
              bgcolor={'rgba(246, 246, 246, 1)'}
              borderBottom={1}
              borderColor={'rgba(228, 231, 236, 1)'}
              height={'80px'}
              >
              <Typography fontWeight={"700"} fontSize={'20px'}>{t(title)}</Typography>
            
            <IconButton  onClick={onClose}>
              <Close sx={{color : "rgba(102, 112, 133, 1)"}}/>
            </IconButton>
            </Box>
            <Box p={2}>
              {children}
            </Box>
          </Box>
        </Drawer>
      );
}

export default ContainerDrawer;