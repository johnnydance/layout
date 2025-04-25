import { Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsDot } from 'react-icons/bs';
import theme from '../../../theme';

function ItemSubMenu({ open, sub }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const getStyles = (path) => {
    const isActive = pathname.startsWith(path);
    return {
      isActive: isActive,
      color: isActive ? theme.colorTextMenuActive : '#344054',
      bgcolor: isActive
      ? { active: theme.colorBgMenuActive, hover: theme.colorBgMenuHover }
      : { active: 'white', hover: theme.colorBgMenuHover },
      hover: theme.colorBgMenuHover,
      font_Weight  : isActive ? '700' : "400"
    };
  };

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List disablePadding sx={{ mt: 0.5 }}>
        {sub?.map((item, i) => {
          const styles = getStyles(item?.url);
          return (
            <ListItem
              key={i}
              component={Link}
              to={item?.url}
              sx={{
                bgcolor: styles.bgcolor.active,
                '&:hover': { bgcolor: styles.bgcolor.hover },
                borderLeft: 4,
                borderColor: styles.isActive ? theme.colorTextMenuActive : 'transparent'
              }}
            >
              <ListItemIcon sx={{ minWidth: 30}}/>
              <ListItemText
                primary={
                  <Typography color={styles.color} fontSize={16} fontWeight={styles.font_Weight}>
                    {t(item?.subMenu)}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
}

export default ItemSubMenu;