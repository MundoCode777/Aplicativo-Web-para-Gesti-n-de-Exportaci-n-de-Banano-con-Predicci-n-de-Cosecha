import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import SummaryCards from '../components/Dashboard/SummaryCards';
import HarvestChart from '../components/Dashboard/HarvestChart';

const DashboardPage = () => {
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-green-50 flex">
        {/* Sidebar fijo a la izquierda */}
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 p-8 pt-24">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    {/* Menú del dashboard en la esquina superior izquierda */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-semibold text-banano-primary mb-4">Menú</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#resumen" className="text-banano-primary hover:underline">Resumen</a>
                                </li>
                                <li>
                                    <a href="#prediccion" className="text-banano-primary hover:underline">Predicción</a>
                                </li>
                                <li>
                                    <a href="#mapa" className="text-banano-primary hover:underline">Mapa de Fincas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Contenido principal */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-banano-primary mb-8 drop-shadow-sm">
                            Panel de Control
                        </h1>
                        <section id="resumen">
                            <SummaryCards />
                        </section>
                        <section id="prediccion" className="mt-10">
                            <div className="bg-gradient-to-tr from-green-100 to-green-50 rounded-2xl shadow-lg p-8 transition-transform hover:scale-[1.01] hover:shadow-xl">
                                <h2 className="text-2xl font-semibold mb-6 text-banano-primary border-b pb-2 border-gray-200">
                                    Predicción de Cosecha
                                </h2>
                                <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                                    <div className="flex-1">
                                        <HarvestChart />
                                    </div>
                                    <div className="mt-6 md:mt-0 md:w-1/3 bg-white rounded-xl shadow p-6 flex flex-col items-center">
                                        <span className="text-5xl font-bold text-green-600 mb-2">+12%</span>
                                        <span className="text-banano-primary font-medium">Predicción de aumento respecto al mes pasado</span>
                                        <p className="text-gray-500 mt-2 text-center text-sm">¡La cosecha proyectada es favorable! Mantén el monitoreo para mejores resultados.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="mapa" className="mt-10">
                            <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-[1.01] hover:shadow-xl h-full flex flex-col">
                                <h2 className="text-2xl font-semibold mb-6 text-banano-primary border-b pb-2 border-gray-200">
                                    Mapa de Fincas
                                </h2>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="h-64 w-full bg-gradient-to-tr from-green-100 to-green-200 rounded-lg flex items-center justify-center border-2 border-dashed border-banano-primary">
                                        <p className="text-banano-primary font-medium text-lg">Mapa interactivo</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
);
};

export default DashboardPage;