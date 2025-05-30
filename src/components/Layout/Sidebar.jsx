import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Map as MapIcon,
  Assessment as ChartIcon,
  LocalShipping as ExportIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Mapa', icon: <MapIcon /> },
    { text: 'Reportes', icon: <ChartIcon /> },
    { text: 'Exportaciones', icon: <ExportIcon /> },
    { text: 'Configuración', icon: <SettingsIcon /> }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar /> {/* Espacio para la navbar */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;