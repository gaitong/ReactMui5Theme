import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

export default function ListItems() {
  const navigate = useNavigate();
  const [selectedRoute, setselectedRoute] = useState("/");

  const handleListItemClick = (event, route) => {
    console.log(route);
    event.preventDefault();
    setselectedRoute(route);
    navigate(`${route}`);
  };

  return (
    <div>
      <React.Fragment>
        <ListItemButton
          selected={selectedRoute === "/home"}
          onClick={(event) => handleListItemClick(event, "/home")}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton
          selected={selectedRoute === "/dashboard"}
          onClick={(event) => handleListItemClick(event, "/dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          selected={selectedRoute === "/about"}
          onClick={(event) => handleListItemClick(event, "/about")}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </React.Fragment>
    </div>
  );
}
