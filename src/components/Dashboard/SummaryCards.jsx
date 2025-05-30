import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Card as CustomCard } from '../UI/Card';

const SummaryCards = () => {
  const cards = [
    { title: 'Producción Semanal', value: '1,250 ton', change: '+5%' },
    { title: 'Pronóstico del Tiempo', value: 'Soleado', icon: '☀️' },
    { title: 'Alertas', value: '3', severity: 'warning' },
    { title: 'Exportaciones', value: '15 envíos', status: 'active' },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CustomCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h4">
                {card.value}
              </Typography>
              {card.change && (
                <Typography variant="body2" color="text.secondary">
                  {card.change} vs semana pasada
                </Typography>
              )}
            </CardContent>
          </CustomCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;