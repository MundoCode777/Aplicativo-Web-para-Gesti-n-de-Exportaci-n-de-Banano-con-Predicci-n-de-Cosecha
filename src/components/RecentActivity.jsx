const RecentActivity = () => {
  const activities = [
    {
      title: "Envío completado - Lote #2024-156",
      detail: "Destino: Rotterdam, Países Bajos",
      time: "hace 2 horas"
    },
    {
      title: "Certificado de calidad emitido",
      detail: "Lote #2024-157 - Calidad A+",
      time: "hace 4 horas"
    },
    {
      title: "Meta semanal alcanzada",
      detail: "1,250 toneladas procesadas",
      time: "hace 6 horas"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-banana-primary">Actividad Reciente</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="border-l-2 border-banana-primary pl-4">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-600">{activity.detail}</p>
            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;