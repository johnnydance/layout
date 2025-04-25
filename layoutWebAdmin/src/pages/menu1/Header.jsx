import { Add, Search } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({onChangeSearch, onAddNew,handleIsShowAddNewPos}) {
  const { t } = useTranslation()
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"}>
      <TextField
        size='small'
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color : 'rgba(102, 112, 133, 1)'}}/>
              </InputAdornment>
            ),
          },
        }}
        placeholder={t("Search")}
        onChange={onChangeSearch}
      />
      <Box display={"flex"} flexDirection={'row'} gap={'16px'}>
      {/* <Button
          startIcon={<Add />}
          variant='outlined'
          onClick={onAddNew}>
          {t("Add new")}
          </Button> */}
        <Button
          startIcon={<Add />}
          variant='contained'
          onClick={handleIsShowAddNewPos}>
          {t("Tạo bài")}
          </Button>
      </Box>
    </Box>
  );
}

export default Header;