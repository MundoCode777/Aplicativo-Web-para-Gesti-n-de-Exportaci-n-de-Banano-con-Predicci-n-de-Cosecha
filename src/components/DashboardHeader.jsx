const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-banana-primary">Banana Export Manager</h1>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-xl text-gray-600">Dashboard</h2>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600">Juan Delgado</span>
          <div className="w-8 h-8 rounded-full bg-banana-primary flex items-center justify-center text-white">
            JD
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;