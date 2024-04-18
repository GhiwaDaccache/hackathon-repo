const TipsCard = ({ title, icon: TipIcon, children }) => {
  return (
    <div className="border w-full rounded-lg flex gap-6 h-full overflow-hidden text-start">
      <div className="w-full h-full bg-blue-950 w-64 h-full flex-shrink-0 flex items-center justify-center">
        <TipIcon size={128} className="text-white" />
      </div>

      <div className="py-6">
        <h2 className="mb-2">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default TipsCard;
