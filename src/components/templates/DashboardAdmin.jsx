// DashboardAdmin.js
import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import Charts from "../Charts";

const DashboardAdmin = ({ logout,role,name,encuesta,jobData,users,response,seccionData,academicData }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);

  return (
    <div>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <Menu />
          </IconButton>
          <Typography variant="h6">Bienvenido {name}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarOpen} onClose={toggleSidebar}>
        <Sidebar
          logout={logout}
            role={role}
          openUsers={openUsers}
          toggleUsersMenu={toggleUsersMenu}
          openSurvey={openSurvey}
          toggleSurveyMenu={toggleSurveyMenu}
        />
      </Drawer>

      <main>
        <StatsCards 
        jobData={jobData}
        encuesta={encuesta}
        users={users}
        response={response}
        role={role}/>
        <Charts
        role={role} jobData={jobData} encuesta={encuesta} seccionData={seccionData} academicData={academicData}/>
      </main>
    </div>
  );
};

export default DashboardAdmin;
