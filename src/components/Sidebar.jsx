const Sidebar = () => {
  const menuItems = [
    { text: 'Mapa', completed: false },
    { text: 'Reportes', completed: true },
    { text: 'Exportaciones', completed: true },
    { text: 'Configuración', completed: true },
  ];

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-4 text-banana-primary">Menú</h3>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <input 
              type="checkbox" 
              checked={item.completed} 
              readOnly
              className="checkbox-custom mr-3"
            />
            <span className={item.completed ? 'text-gray-700' : 'text-gray-400'}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">Gerente de Exportación</p>
        <p className="font-medium">Juan Delgado</p>
      </div>
    </div>
  );
};

export default Sidebar;