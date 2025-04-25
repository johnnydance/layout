import { AppBar, Toolbar, Typography, IconButton, Avatar, Badge, Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { logAxons, logoFiveStar } from "../../constants/images";
import LaguageSelect from "./LaguageSelect";
import UserProfile from "./UserProfile";
import { NAME_APPLICATION } from "../../constants/statics";
import { RMenu1 } from "../../routes/pathRoute";
import { Menu } from "@mui/icons-material";
import DrawerMenu from "./DrawerMenu";

const AppBarCustom = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });


  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "0px 7px 10px rgba(0, 0, 0, 0.1)"}}>
      <Toolbar disableGutters sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 4, paddingRight: 4 }}>
        {/* Logo và tên */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap:1, cursor:'pointer',height: "80px"}} >
            {
              isMobile && (
                <DrawerMenu />
              )
            }
            <img alt="Logo" src={logAxons} height={45} />
            <img alt="Logo" src={logoFiveStar} height={45} />
            {
             ! isMobile &&  <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: "bold", ml:1 }}
            >
             {NAME_APPLICATION}
            </Typography>
            }
           
        </Box>

        <Box display={"flex"} flexDirection={"row"} gap={4} alignItems={"center"}>
          {/* Phần Mobile */}
          {!isMobile && (
            /* Phần Web */
              <UserProfile />
          )}
          <Box><LaguageSelect/></Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
