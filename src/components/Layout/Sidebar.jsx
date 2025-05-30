import React from 'react';
import {
  FaTachometerAlt,
  FaMap,
  FaChartBar,
  FaTruck,
  FaCog
} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <FaTachometerAlt /> },
    { text: 'Mapa', icon: <FaMap /> },
    { text: 'Reportes', icon: <FaChartBar /> },
    { text: 'Exportaciones', icon: <FaTruck /> },
    { text: 'Configuración', icon: <FaCog /> }
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-10 mt-16">
      <nav className="mt-6">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-banano-primary hover:text-white transition-colors">
                <span className="mr-3">{item.icon}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;