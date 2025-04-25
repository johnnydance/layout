import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import theme from '../../../theme';

function ItemMenu({ item }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(item?.url);
  const textColor = isActive ? theme.colorTextMenuActive : '#344054';
  const bgStyles = isActive? { active: theme.colorBgMenuActive, hover: theme.colorBgMenuHover }: { active: 'white', hover: theme.colorBgMenuHover };
  const font_Weight  = isActive ? '700' : "400"

  return (
      <ListItem  component={Link} to={item?.url} sx={{
        bgcolor: bgStyles.active,
        '&:hover': { bgcolor: bgStyles.hover },
        borderLeft: 4,
        borderColor: isActive ? theme.colorTextMenuActive : 'transparent',
        p: 2
      }}>
        <ListItemIcon sx={{ minWidth: 30}}>{item?.icon?.(textColor)}</ListItemIcon>
        <ListItemText
          primary={
            <Typography fontWeight={font_Weight} color={textColor} fontSize={16}>
              {t(item?.menu)}
            </Typography>
          }
        />
      </ListItem>
  );
}

export default ItemMenu;