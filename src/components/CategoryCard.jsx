const CategoryCard = ({ icon, title }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border rounded-lg p-6 cursor-pointer hover:bg-Secondary hover:text-white transition-colors duration-300">
        <div className="text-4xl">{icon}</div>
        <h1 className="text-2xl mt-4">{title}</h1>
      </div>
    </>
  );
};

export default CategoryCard;
