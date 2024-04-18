const TipsCard = ({ title, children }) => {
  return (
    <div className="border w-full rounded-lg flex gap-6 h-full overflow-hidden">
      <div className="w-full h-full bg-blue-900 w-64 h-full"></div>

      <div className="py-6">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default TipsCard;
