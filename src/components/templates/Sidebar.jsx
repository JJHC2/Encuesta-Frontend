import React from "react";
import { List, ListItem, ListItemText, Divider, Collapse } from "@mui/material";
import {
  Dashboard,
  People,
  PersonAdd,
  Visibility,
  ExpandLess,
  ExpandMore,
  Assignment,
  ExitToApp,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/cuervo.png";

const Sidebar = ({
  openUsers,
  toggleUsersMenu,
  openSurvey,
  toggleSurveyMenu,
  logout,
  role,
}) => {
  const location = useLocation();

  const styles = {
    sidebar: {
      background: "linear-gradient(135deg, #2e7d32, #388e3c)", 
      height: "100vh",
      padding: "20px",
      color: "#fff", 
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", 
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    logo: {
      width: 80,
      height: "auto",
    },
    listItem: {
      borderRadius: "8px",
      padding: "10px 15px",
      transition: "background-color 0.3s ease",
      marginBottom: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
    icon: {
      color: "#ffffff",
      marginRight: "10px",
    },
    nestedItem: {
      paddingLeft: 30,
      fontSize: "0.9rem", 
    },
    divider: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      margin: "15px 0",
    },
    expandIcon: {
      color: "#ffffff", 
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" style={styles.logo} />
      </div>

      <List>
        {/* Dashboard */}
        <ListItem button component={Link} to="/" sx={styles.listItem}>
          <Dashboard style={styles.icon} />
          <ListItemText primary="Dashboard" sx={{ marginLeft: 2, color: "#fff" }} />
        </ListItem>

        <Divider sx={styles.divider} />

        {/* Menú de Usuarios */}
        {(role === 1 || role === 3 || role === 4) && (
          <ListItem button onClick={toggleUsersMenu} sx={styles.listItem}>
            <People style={styles.icon} />
            <ListItemText primary="Usuarios" sx={{ marginLeft: 2, color: "#fff" }} />
            {openUsers ? (
              <ExpandLess style={styles.expandIcon} />
            ) : (
              <ExpandMore style={styles.expandIcon} />
            )}
          </ListItem>
        )}

        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/gestion"
              sx={{ marginBottom: 1,color: "#ffffff" }}
            >
              <Visibility style={styles.icon} />
              <ListItemText  primary="View Users" sx={{ marginLeft: 2 , color: "#fffffff"}} />
            </ListItem>
            {role === 1 && (
              <ListItem
                button
                component={Link}
                to="/admin/add"
                sx={{ marginBottom: 1,color: "#ffffff" }}
              >
                <PersonAdd style={styles.icon} />
                <ListItemText primary="Create User" sx={{ color: "#ffffff",marginLeft: 2 }} />
              </ListItem>
            )}
          </List>
        </Collapse>

        {/* Menú Encuestas */}
        <ListItem button onClick={toggleSurveyMenu} sx={styles.listItem}>
          <Assignment style={styles.icon} />
          <ListItemText primary="Encuestas" sx={{ marginLeft: 2, color: "#ffffff" }} />
          {openSurvey ? (
            <ExpandLess style={styles.expandIcon} />
          ) : (
            <ExpandMore style={styles.expandIcon} />
          )}
        </ListItem>

        <Collapse in={openSurvey} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/gestion/encuesta"
              sx={{ marginBottom: 1 }}
            >
              <Visibility style={styles.icon} />
              <ListItemText primary="Encuestas" sx={{ marginLeft: 2 }} />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={styles.divider} />

        {/* Cerrar sesión */}
        {location.pathname === "/admin" && (
          <ListItem button onClick={logout} sx={styles.listItem}>
            <ExitToApp style={styles.icon} />
            <ListItemText primary="Logout" sx={{ marginLeft: 2, color: "#fff" }} />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default Sidebar;
