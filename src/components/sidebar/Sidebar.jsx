import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GlobeIcon from "../../icons/Globe.svg";
import ClipboardIcon from "../../icons/Clipboard.svg";
import StudiosIcon from "../../icons/Studios.svg";
import StyleIcon from "../../icons/Style.svg";
import DoubleChevronRight from "../../icons/Double-chevron-right.svg";
import "./SideBar.css";
const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "center",
  maxWidth: "70px",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 0,
      }}
    >
      <Drawer
        className="drawer-navigation"
        variant="permanent"
        open={open}
        sx={{ position: "inherit" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {open === true ? (
              <ChevronLeftIcon />
            ) : (
              <img src={DoubleChevronRight} alt="Double Chevron Right" />
            )}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ margin: "0px 12px" }}>
          <List>
            {["Discovery", "Studios", "Dashboard", "Clipboard"].map(
              (text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{
                    borderBottom: index !== 3 ? "2px solid #E5E5E9" : "none",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 && <img src={GlobeIcon} alt="icons" />}
                      {index === 1 && <img src={StudiosIcon} alt="icons" />}
                      {index === 2 && <img src={ClipboardIcon} alt="icons" />}
                      {index === 3 && <img src={StyleIcon} alt="icons" />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
