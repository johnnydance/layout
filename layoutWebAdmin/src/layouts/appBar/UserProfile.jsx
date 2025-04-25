import React from 'react';
import { Avatar, Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import { useAppContext } from '../../contexts/AppContext';
import { Person } from '@mui/icons-material';

const UserProfile = () => {
  const { user } = useAppContext();

  return (
    <Box display="flex" alignItems="center" sx={{ cursor: 'pointer', p: 1 }}>
      
      {/* Avatar container */}
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '100%',
          border: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "rgba(228, 231, 236, 1)"
        }}
      >
        <Person sx={{ fontSize: 30, color: "rgba(10, 110, 225, 1)" }} />
      </Box>

      {/* User Information */}
      <Box sx={{ ml: 1, textAlign: 'left' }}>
        <Typography variant="subtitle1" fontSize={14} fontWeight={600}>
          {user?.Profile?.DisplayName || 'Huỳnh phát Triển'}
        </Typography>
        <Typography variant="body2" fontSize={12} color="rgba(102, 112, 133, 1)">
          {user?.Profile?.Department || "Department"}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
