import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const ProductCard = (product) => {
  console.log(product.product);
  const { isDiscount, name, price } = product?.product || {};

  return (
    <>
      <div className="group ">
        {/* product image */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] p-4 rounded-lg relative overflow-hidden">
          <img
            className="h-full w-full rounded-lg"
            src={
              "https://img.drz.lazcdn.com/static/bd/p/ca4dff8741b381e54e71d6def282b900.jpg_400x400q80.jpg"
            }
            alt="Product Image"
          />
          {/* discount percentage */}
          <span
            className={`px-2 py-1 bg-Secondary text-white rounded-xs absolute left-3 top-3 text-md ${
              isDiscount ? "block" : "hidden"
            }`}
          >
            -40%
          </span>

          {/* wishlist and view buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="p-2 rounded-full bg-white shadow cursor-pointer">
              <CiHeart size={20} />
            </div>
            <div className="p-2 rounded-full bg-white shadow cursor-pointer">
              <FaRegEye size={20} />
            </div>
          </div>

          {/* add to card button */}
          <button className="py-2 w-full absolute top-full left-0 bg-black text-white group-hover:-translate-y-full transition-all duration-300 cursor-pointer">
            Add To Cart
          </button>
        </div>

        {/* product details */}
        <div className="mt-6 space-y-1">
          <h1 className="text-lg font-medium">{name || "Hello"}</h1>
          <div className="flex gap-3 text-[16px] font-medium">
            <p className=" text-Secondary">$ {price}</p>
            <p
              className={`${
                isDiscount ? " line-through opacity-50 block" : "hidden"
              }`}
            >
              $ {price}
            </p>
          </div>
          <div className="flex gap-2">
            <Rating
              readonly
              className="text-[#FFAD33] text-xl"
              placeholderRating={2.5}
              fullSymbol={<IoMdStar />}
              emptySymbol={<IoMdStarOutline />}
              placeholderSymbol={<IoMdStar />}
            />
            <p>(45)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
