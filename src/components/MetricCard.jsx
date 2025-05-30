const MetricCard = ({ title, value, change, status }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-banana-primary">{value}</p>
      {change && (
        <div className={`mt-2 flex items-center ${status === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
          <span className="mr-1">✔</span>
          <span className="text-sm">{change}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;