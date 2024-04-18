const TipsCard = ({ title, children }) => {
  return (
    <div className="p-4 border max-w-lg">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default TipsCard;
