import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import LaguageSelect from "./LaguageSelect";
import { AccountCircle, Logout, Menu } from "@mui/icons-material";
import { useAppContext } from "../../contexts/AppContext";
import ListMenu from "../sideBars/ListMenu";
import SideBars from "../sideBars/SideBars";
import UserProfile from "./UserProfile";
import theme from "../../theme";
import { useMediaQuery } from "react-responsive";
import { NAME_APPLICATION } from "../../constants/statics";

function DrawerMenu(props) {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={() => setState(true)} sx={{p: 0}}>
          <Menu />
        </IconButton>
        <Drawer anchor={"left"} open={state} onClose={() => setState(!state)}>
          <Box display={"flex"} flexDirection={"column"} width={theme.drawerWidth}>
            <Box display={"flex"} height={'80px'}>
              <UserProfile />
            </Box>
            <Divider />

            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                bgcolor={"rgba(246, 247, 249, 1)"}
                height={"calc(100vh - 82px)"}
              >
                <SideBars box />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default DrawerMenu;
