import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SectionTitle = ({ heading, title, isViewMore }) => {
  return (
    <>
      <div className="mb-16">
        <div className="flex items-center gap-4 text-lg font-medium mb-6">
          <div className="h-8 w-5 rounded-xs bg-Secondary"></div>
          <h1 className="text-Secondary">{heading}</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>

          {/* arrow icons */}
          {/* <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <FaArrowLeft />
            </div>
            <div className="p-4 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <FaArrowRight />
            </div>
          </div> */}

          {/* View all */}
          {isViewMore && (
            <button className="px-10 bg-Secondary py-3 2xl:py-4 text-lg text-white cursor-pointer rounded-xs">
              View All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
