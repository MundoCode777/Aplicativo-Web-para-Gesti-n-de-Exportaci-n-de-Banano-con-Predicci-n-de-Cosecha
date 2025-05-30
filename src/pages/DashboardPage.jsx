import React from 'react';
import { Box, Grid } from '@mui/material'; // Importación corregida
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import SummaryCards from '../components/Dashboard/SummaryCards';
import HarvestChart from '../components/Dashboard/HarvestChart';
import FarmMap from '../components/Dashboard/FarmMap';
import ExportsTable from '../components/Dashboard/ExportsTable';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <SummaryCards />
        <Box sx={{ my: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <HarvestChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <FarmMap />
            </Grid>
          </Grid>
        </Box>
        <ExportsTable />
      </Box>
    </Box>
  );
};

export default DashboardPage;