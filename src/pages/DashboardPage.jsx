import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import WeatherCard from '../components/WeatherCard';
import AlertCard from '../components/AlertCard';
import RecentActivity from '../components/RecentActivity';

const DashboardPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MetricCard 
                title="Producción Semanal" 
                value="1,250 ton" 
                change="+5% vs semana pasada" 
                status="positive" 
              />
              <MetricCard 
                title="Exportaciones Activas" 
                value="24" 
                change="+3 nuevas" 
                status="positive" 
              />
              <MetricCard 
                title="Ingresos del Mes" 
                value="$485K" 
                change="+12%" 
                status="positive" 
              />
              <MetricCard 
                title="Calidad Promedio" 
                value="A+" 
              />
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-1">
                <WeatherCard />
              </div>
              <div className="lg:col-span-2">
                <AlertCard />
              </div>
            </div>
            
            {/* Third Row */}
            <div>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;