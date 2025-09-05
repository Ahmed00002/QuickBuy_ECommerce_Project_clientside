import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import ProductCard from "./ProductCard";
import ViewMoreButton from "./shared/ViewMoreButton";

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  useEffect(() => {
    axios.get("./flashSale.json").then((res) => setFlashSaleProducts(res.data));
  }, []);
  return (
    <>
      <section className="mt-36 center pb-16 border-b-[2px] mb-3">
        <SectionTitle heading={"Today's"} title={"Flash Sale"} />

        <div className="flex flex-wrap gap-4">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>

        <ViewMoreButton />
      </section>
    </>
  );
};

export default FlashSales;
