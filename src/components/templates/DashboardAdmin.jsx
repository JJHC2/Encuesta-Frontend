import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import Charts from "../Charts";

const DashboardAdmin = ({
  logout,
  role,
  name,
  encuesta,
  jobData,
  users,
  response,
  seccionData,
  academicData,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);

  const styles = {
    appBar: {
      backgroundColor: "#ffffff", 
      color: "#2e7d32",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
    },
    menuButton: {
      color: "#2e7d32", 
    },
    mainContent: {
      margin: "20px",
      padding: "20px",
      backgroundColor: "#f9f9f9", 
      borderRadius: "8px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", 
    },
    drawer: {
      width: "240px",
    },
    welcomeText: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  };

  return (
    <div>
      <CssBaseline />
      {/* Barra de navegación */}
      <AppBar position="sticky" style={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" style={styles.menuButton} onClick={toggleSidebar}>
            <Menu />
          </IconButton>
          <Typography variant="h6" style={styles.welcomeText}>
            Bienvenido, {name}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{ "& .MuiDrawer-paper": styles.drawer }}
      >
        <Sidebar
          logout={logout}
          role={role}
          openUsers={openUsers}
          toggleUsersMenu={toggleUsersMenu}
          openSurvey={openSurvey}
          toggleSurveyMenu={toggleSurveyMenu}
        />
      </Drawer>

      
      <Box component="main" style={styles.mainContent}>
        <StatsCards
          jobData={jobData}
          encuesta={encuesta}
          users={users}
          response={response}
          role={role}
        />
        <Charts
          role={role}
          jobData={jobData}
          encuesta={encuesta}
          seccionData={seccionData}
          academicData={academicData}
        />
      </Box>
    </div>
  );
};

export default DashboardAdmin;
