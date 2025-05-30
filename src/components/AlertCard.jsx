const AlertCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-banana-primary">Alertas</h3>
      <ul className="space-y-3">
        <li className="flex items-center">
          <input type="checkbox" className="checkbox-custom mr-3" />
          <span>Retraso en envío a Puerto de Guayaquil</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="checkbox-custom mr-3" />
          <span>Nueva orden de 500 ton para Europa</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="checkbox-custom mr-3" />
          <span>Calidad A+ certificada para lote #2024-05</span>
        </li>
      </ul>
    </div>
  );
};

export default AlertCard;