import { Box, ListItemButton } from "@mui/material";
import React from "react";
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
const drawerWidth = 220;
const page = {
    background: "#f9f9f9",
    width: "100%",
    padding:(theme)=>theme.spacing(3)
};
//test commit
const drawer = {
    width: drawerWidth,
    ".MuiDrawer-paper": {
        width: drawerWidth,
    },
};

const drawerPaper = {
    width: drawerWidth,
    ".MuiDrawer-paper": {
        width: drawerWidth,
    },
};

const root = {
    display: "flex",
};





const menuItems = [
    {
        text: "My Notes",
        icon: <SubjectOutlined color="secondary" />,
        path: "/",
    },
    {
        text: "Create Notes",
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: "/create",
    },
];
export default function Layout({ children }) {
    // const classes = fClasses(note);
    const history = useHistory();
    const location = useLocation();
  return (
    <Box sx={root} >
      <Drawer
        sx={drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: drawerPaper }}
      >
        <List>
        <Typography
        sx={{margin:'15px', fontSize:'22px'}}
        >Bonsoir, Todo-List</Typography>
          {menuItems.map((item)=>(
            <ListItemButton
            key={item.text}
            onClick={()=> history.push(item.path)}
            sx={location.pathname === item.path ? {backgroundColor:'#f1f4f4'} : null}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box sx={page}>{children}</Box>
    </Box>
  );
}
