const HeroSection = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <>
      <section className="">
        <div className="center grid grid-cols-12">
          <aside className="col-span-3 border-r-2 pt-10">
            <ul className="flex flex-col justify-between h-full text-lg">
              {categories.map((category) => (
                <li>{category}</li>
              ))}
            </ul>
          </aside>
          {/* banner advertisement section */}
          <div className="col-span-9 pl-10 pt-10">
            <div className="w-full bg-red-50 h-[344px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
