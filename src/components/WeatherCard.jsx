const WeatherCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-banana-primary">Pronóstico del Tiempo</h3>
      
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold mr-4">28°C</span>
        <div>
          <p className="font-medium">Soleado</p>
          <p className="text-sm text-gray-600">Ideal para cosecha</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm mb-6">
        <p>Humedad: 65%</p>
        <p>Viento: 12 km/h</p>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-medium mb-3">Acciones Rápidas</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" className="checkbox-custom mr-3" />
            <span>Nueva Exportación</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="checkbox-custom mr-3" />
            <span>Generar Reporte</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" checked readOnly className="checkbox-custom mr-3" />
            <span className="text-gray-500">Programar Envío</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;