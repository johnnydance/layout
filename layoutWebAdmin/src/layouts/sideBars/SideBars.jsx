import Box from "@mui/material/Box";
import Menu from "./ListMenu";
import theme from "../../theme";
import { Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Logout } from "@mui/icons-material";

export default function SideBars({box = false }) {
  const { t } = useTranslation();

  return (
    <Box
      component={ box ? Box : Paper}
      position="relative"
      sx={{
        background: 'white',
        display: "flex",
        flexDirection: 'column',
        height: '100%',
        width: theme.drawerWidth,
        borderRadius: 0
      }}
    >
      {/* Menu list */}
      <Box
        sx={{
          mt: '32px',
          flex: 1,
          overflow: "auto",
          mb: '10px',
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c1c1c1',
            borderRadius: '8px',
            opacity: 0,
            transition: 'opacity 0.3s'
          },
          '&:hover::-webkit-scrollbar-thumb': { opacity: 1 },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          '&:hover': { scrollbarColor: '#c1c1c1 transparent' }
        }}
      >
        <Menu />
      </Box>

      {/* Footer logout */}
      <Box
        component="footer"
        borderTop={1}
        borderColor="rgba(228, 231, 236, 1)"
        height={70}
        display="flex"
        alignItems="center"
        mr={2}
      >
        <Button
          variant="text"
          color="error"
          size="large"
          startIcon={<Logout />}
        >
          {t("Logout")}
        </Button>
      </Box>
    </Box>
  );
}
