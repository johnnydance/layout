import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ItemMenu({ open, handleClick, item }) {
  const { t } = useTranslation();

  return (
      <ListItem
        onClick={handleClick}
        
        sx={{
          cursor: 'pointer',
          borderRadius: 1,
          bgcolor: 'white',
          borderLeft: 4,
          borderColor: "transparent",
          py: 2
        }}
      >
        <ListItemIcon sx={{ minWidth: 30}}>{item?.icon?.('#344054')}</ListItemIcon>
        <ListItemText
          
          primary={<Typography fontSize={16} fontWeight={'400'}>{t(item?.menu)}</Typography>}
        />
        {item.sub && (open ? <ExpandLess sx={{ color: '#344054', fontSize: '24px' }} /> : <ExpandMore sx={{ color: '#344054', fontSize: '24px' }} />)}
      </ListItem>
  );
}

export default ItemMenu;