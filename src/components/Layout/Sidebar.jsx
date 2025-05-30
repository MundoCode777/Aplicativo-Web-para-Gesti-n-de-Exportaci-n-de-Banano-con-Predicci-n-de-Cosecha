import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Map as MapIcon,
  Assessment as ChartIcon,
  LocalShipping as ExportIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Sidebar = () => {
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
        {['Dashboard', 'Mapa', 'Reportes', 'Exportaciones', 'Configuración'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <DashboardIcon />}
              {index === 1 && <MapIcon />}
              {index === 2 && <ChartIcon />}
              {index === 3 && <ExportIcon />}
              {index === 4 && <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;