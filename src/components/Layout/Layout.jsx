import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useHeading } from "../../context/HeadingContext";

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  marginLeft: `-${drawerWidth}px`,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#367fa9",
  boxShadow: "none",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
  color: "#fff",
  backgroundColor: "#367fa9",
}));

const SideHeaderAppBar = styled(MuiAppBar)({
  background: "#f4f4f4",
  color: "#000",
  boxShadow: "none",
});

const ContentAppBar = styled(MuiAppBar)({
  backgroundColor: "#f5f5f5",
  color: "#000",
});

export default function Layout() {
  const { heading, setHeading } = useHeading();

  const sidebarMenu = [
    {
      id: "master",
      label: "Master",
      children: [
        {
          id: "company-info",
          label: "Company Information",
          path: "/",
        },
        {
          id: "accounting-heads",
          label: "Accounting Heads",
          path: "/accounting-head",
        },
        {
          id: "society-master",
          label: "Society Master",
          children: [
            { id: "society", label: "society", path: "/society" },
            { id: "formi", label: "Form I", path: "/formi" },
          ],
        },
      ],
    },
    {
      id: "flat",
      label: "Flat Details",
      path: "/company-inf",
    },
  ];

  // Function to recursively render TreeItems with children
  const renderTreeItems = (items) => {
    return items.map((item) => {
      const handleItemClick = () => {
        setHeading(item.label);
      };
      return (
        <TreeItem
          key={item.id}
          itemId={item.id}
          label={
            item.path ? (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "#000" }}
                onClick={handleItemClick}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{ color: "#000", cursor: "pointer" }}
                onClick={handleItemClick}
              >
                {item.label}
              </span>
            )
          }
        >
          {item.children && renderTreeItems(item.children)}
        </TreeItem>
      );
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top fixed bar */}
      <TopAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleDrawerClose}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </TopAppBar>

      {/* Left drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h5">Nest [Society]</Typography>
        </DrawerHeader>

        <SideHeaderAppBar position="static" component="div">
          <Toolbar>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="Avatar" src="/avatar.jpg" />
              <Stack spacing={0}>
                <Typography variant="subtitle2">Hello !!</Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <ExitToAppIcon fontSize="small" />
                  <Typography variant="caption">Sign Out</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Toolbar>
        </SideHeaderAppBar>

        <Divider />
        <SimpleTreeView>
          {renderTreeItems(sidebarMenu)} {/* Render recursively */}
        </SimpleTreeView>
        <Divider />
      </Drawer>

      {/* Main content */}
      <Main open={open}>
        <div>
          <Toolbar />
        </div>
        <ContentAppBar position="static" component="div">
          <Toolbar>
            <Typography variant="h5">{heading}</Typography>
          </Toolbar>
        </ContentAppBar>
        <Outlet />
      </Main>
    </Box>
  );
}
