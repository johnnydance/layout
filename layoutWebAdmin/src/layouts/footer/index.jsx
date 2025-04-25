import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { logAxons } from '../../constants/images';
import { COPYRIGHT_NOTICE, VERSION_APP } from '../../constants/statics';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Box
      sx={{
        zIndex:9999,
        bgcolor: '#f5f5f5', // Màu nền xám nhạt
        borderTop: '1px solid #e0e0e0', // Đường viền trên
        // minHeight: '70px'
        width: "100%"
        // Bỏ position: fixed để footer nằm trong luồng nội dung
      }}
      // component="footer"
    >
     
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMobile ? "center" : 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            height: 70
          }}
        >
          {/* Phần bên trái: Logo và thông tin */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, textAlign: isMobile ? "center":"start"  }}>
            <img
              src={logAxons}
              alt="Axons Logo"
              style={{ width: 50, height: 50 }}
            />
            <Box display={'flex'} flexDirection={"column"} gap={0.5}>
              <Typography variant="body2" color="text.secondary">
                {VERSION_APP}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {COPYRIGHT_NOTICE}
              </Typography>
            </Box>
          </Box>

          {/* Phần bên phải: Liên kết */}
          <Box sx={{ display: 'flex',gap: 0.5, flexDirection: 'column', textAlign: isMobile ? "center":"end" }}>
            <Link
              href="#"
              variant="body2"
              color="primary"
              sx={{ textDecoration: 'none' }}
            >
              Privacy and Conditions
            </Link>
            <Link
              href="#"
              variant="body2"
              color="primary"
              sx={{ textDecoration: 'none' }}
            >
              Terms and GDPR
            </Link>
          </Box>
        </Box>

    </Box>
  );
}

export default Footer;