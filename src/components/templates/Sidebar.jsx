import React from "react";
import { List, ListItem, ListItemText, Divider, Collapse } from "@mui/material";
import {
  Dashboard,
  People,
  PersonAdd,
  Edit,
  Visibility,
  ExpandLess,
  ExpandMore,
  Assignment,
  ExitToApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/cuervo.png";

const Sidebar = ({
  openUsers,
  toggleUsersMenu,
  openSurvey,
  toggleSurveyMenu,
  logout,
  role,
}) => {
  return (
    <List>
      {/* Logo */}
      <ListItem>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: 100, height: "auto", marginBottom: 20 }}
        />
      </ListItem>

      <ListItem button component={Link} to="/">
        <Dashboard color="primary" />
        <ListItemText primary="Dashboard" sx={{ marginLeft: 2 }} />
      </ListItem>

      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {/* Menú de Usuarios */}
      {(role === 1 || role === 3 || role === 4) && (
        <ListItem button onClick={toggleUsersMenu}>
          <People color="primary" />
          <ListItemText primary="Usuarios" sx={{ marginLeft: 2 }} />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      )}

      <Collapse in={openUsers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            to="/gestion"
            sx={{ paddingLeft: 4 }}
          >
            <Visibility color="secondary" />
            <ListItemText primary="View Users" sx={{ marginLeft: 2 }} />
          </ListItem>
          {role === 1 && (
            <ListItem
              button
              component={Link}
              to="/admin/add"
              sx={{ paddingLeft: 4 }}
            >
              <PersonAdd color="secondary" />
              <ListItemText primary="Create User" sx={{ marginLeft: 2 }} />
            </ListItem>
          )}
        </List>
      </Collapse>

      {/* Menú Encuestas */}
      <ListItem button onClick={toggleSurveyMenu}>
        <Assignment color="primary" />
        <ListItemText primary="Encuestas" sx={{ marginLeft: 2 }} />
        {openSurvey ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openSurvey} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            to="/gestion/encuesta"
            sx={{ paddingLeft: 4 }}
          >
            <Visibility color="secondary" />
            <ListItemText primary="Encuestas" sx={{ marginLeft: 2 }} />
          </ListItem>
        </List>
      </Collapse>

      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {/* Cerrar sesión  */}
      <ListItem button onClick={logout}>
        <ExitToApp color="primary" />
        <ListItemText primary="Logout" sx={{ marginLeft: 2 }} />
      </ListItem>
    </List>
  );
};

export default Sidebar;
