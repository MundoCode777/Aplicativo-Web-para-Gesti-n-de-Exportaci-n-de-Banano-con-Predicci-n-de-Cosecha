import React from 'react';

const SummaryCards = () => {
  const cards = [
    { title: 'Producción Semanal', value: '1,250 ton', change: '+5%' },
    { title: 'Pronóstico del Tiempo', value: 'Soleado', icon: '☀️' },
    { title: 'Alertas', value: '3', status: 'warning' },
    { title: 'Exportaciones', value: '15 envíos' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
          <div className="flex items-center mt-2">
            {card.icon && <span className="text-2xl mr-2">{card.icon}</span>}
            <p className="text-2xl font-bold text-banano-primary">{card.value}</p>
          </div>
          {card.change && (
            <p className="text-sm mt-2 text-green-500">{card.change} vs semana pasada</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;