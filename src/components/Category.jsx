import { IoIosPhonePortrait } from "react-icons/io";
import CategoryCard from "./CategoryCard";
import SectionTitle from "./SectionTitle";
import { LiaGamepadSolid } from "react-icons/lia";
import { CiCamera, CiHeadphones, CiMonitor } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";

const categories = [
  { name: "Phones", icon: <IoIosPhonePortrait />, selected: false },
  { name: "Computers", icon: <CiMonitor />, selected: false },
  { name: "SmartWatch", icon: <IoWatchOutline />, selected: false },
  { name: "Camera", icon: <CiCamera />, selected: true },
  { name: "HeadPhones", icon: <CiHeadphones />, selected: false },
  { name: "Gaming", icon: <LiaGamepadSolid />, selected: false },
];

const Category = () => {
  return (
    <>
      <section className="center mt-20 pb-16 border-b-[2px]">
        <SectionTitle
          heading={"Category"}
          title={"Browse By Category"}
          isViewMore={false}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((category, idx) => (
            <CategoryCard
              key={idx}
              icon={category.icon}
              title={category.name}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
