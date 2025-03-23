import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import ProductCard from "./ProductCard";

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  useEffect(() => {
    axios.get("./flashSale.json").then((res) => setFlashSaleProducts(res.data));
  }, []);
  return (
    <>
      <section className="mt-36 center">
        <SectionTitle />

        <div className="flex flex-wrap gap-4">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FlashSales;
